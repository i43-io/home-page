/* eslint-disable */
import _ from 'co-lodash'
import { v5 } from 'okex-api'

const APIOPT_KEY = 'APIOPT'
const apiOpt = JSON.parse(window.localStorage.getItem(APIOPT_KEY) || '{}')

const httpApi = new v5.HttpApi({ baseURL: 'https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod' })
let wsApi = null

function parseTicker(t) {
  const [coin,,dd] = t.instId.split('-')
  Object.assign(t, { coin, dd })
  return t
}

function setDiff(t, swap) {
  const diffSf = t.bidPx - swap.askPx
  const diffFs = swap.bidPx - t.askPx
  if (diffSf > diffFs) {
    t.diff = diffSf
    t.diffRate = diffSf / swap.askPx
  } else {
    t.diff = diffFs
    t.diffRate = diffFs / t.askPx
  }
}

function groupTickers(middle, futuresTickers, swapTickers) {
  const ret = futuresTickers
    .filter(t => t.instId.indexOf(middle) > 0)
    .reduce((m, t) => {
      const { coin } = t;
      if (!m[coin]) m[coin] = []
      m[coin].push(t)

      return m
    }, {})

  swapTickers
    .filter(t => t.instId.indexOf(middle) > 0)
    .forEach(t => { if (ret[t.coin]) ret[t.coin].push(t) })

  for (const coin of Object.keys(ret)) {
    ret[coin].sort((a, b) => a.dd === 'SWAP' ? -1 : b.dd === 'SWAP' ? 1 : a.dd < b.dd ? -1 : a.dd > b.dd ? 1 : 0)
    if (ret[coin][0].dd === 'SWAP') {
      const swap = ret[coin][0]
      ret[coin].slice(1).forEach(t => setDiff(t, swap))
    }
  }

  return ret
}

export default {
  namespaced: true,
  state: {
    usdTickers: {},
    usdtTickers: {},
    accounts: {},
    positions: {},
    api: apiOpt
  },
  getters: {
    currentTickers({ usdTickers, usdtTickers }, _, { currentInstId }) {
      const [coin, middle] = currentInstId.split('-')
      const group = (middle === 'USD' ? usdTickers : usdtTickers)[coin]
      const ret = group && group
        .filter(t => t.dd === 'SWAP' || t.instId === currentInstId)
        .sort((a, b) => a.last - b.last)

      return ret || []
    },
    currentPositionPairs({ positions }, { currentTickers }) {
      if (currentTickers.length !== 2) return []

      const sides = ['short:', 'long:'];
      return [[0, 1], [1, 0]]
        .map(pair => {
          pair = pair.map((tidx, idx) => {
            const tick = currentTickers[tidx]
            const pos = positions[sides[idx] + tick.instId]
            return pos && { ...tick, ...pos }
          })

          return pair.every(v => v) && pair
        })
        .filter(v => v)
    }
  },
  mutations: {
    setTickers(state, { usdTickers, usdtTickers }) {
      state.usdTickers = usdTickers
      state.usdtTickers = usdtTickers
    },
    setApiOpt(state, opt) {
      state.api = opt
    },
    setAccounts(state, accounts) {
      accounts.details = accounts.details.reduce((m, acc) => {
        m[acc.ccy] = acc
        return m
      }, {})
      state.accounts = accounts
    },
    setPositions(state, positions) {
      state.positions = positions.reduce((m, p) => {
        m[p.posSide + ':' + p.instId] = p
        return m
      }, {})
    },
    updateTicker(state, ticker) {
      const tickers = ticker.instId.indexOf('-USD-') > 0 ? state.usdTickers : state.usdtTickers
      const group = tickers[ticker.coin]
      const swap = group[0]

      const oldTicker = group.find(t => t.instId === ticker.instId)
      Object.assign(oldTicker, ticker)
      if (ticker.dd === 'SWAP') {
        group.slice(1).forEach(t => setDiff(t, swap))  
      } else {
        setDiff(oldTicker, swap)
      }
    }
  },
  actions: {
    async init({ commit, dispatch }) {
      const futuresTickers = (await httpApi.getTickers('FUTURES')).map(parseTicker)
      const swapTickers = (await httpApi.getTickers('SWAP')).map(parseTicker)

      const usdTickers = groupTickers('-USD-', futuresTickers, swapTickers)
      const usdtTickers = groupTickers('-USDT-', futuresTickers, swapTickers)

      commit('setTickers', { usdTickers, usdtTickers })
      await dispatch('updateApiOpt', apiOpt)

      wsApi = new v5.WsApi()
      wsApi.on('tickers', ([ticker]) => commit('updateTicker', parseTicker(ticker)))
      await wsApi.subscribePublic(_.flatMap(usdTickers, g => g.map(({ instId }) => ({ channel: 'tickers', instId }))))
      await wsApi.subscribePublic(_.flatMap(usdtTickers, g => g.map(({ instId }) => ({ channel: 'tickers', instId }))))
    },

    async updateAccount({ commit, state }) {
      const coins = Object.keys(state.usdTickers).join(',') + ',USDT'

      commit('setAccounts', await httpApi.getAccounts(coins))
      commit('setPositions', [
        ...await httpApi.getPositions('FUTURES'),
        ...await httpApi.getPositions('SWAP')
      ])
    },

    async updateApiOpt({ dispatch }, { apiKey, apiSecret, passphrase }) {
      if (apiKey && apiSecret && passphrase) {
        window.localStorage.setItem(APIOPT_KEY, JSON.stringify({ apiKey, apiSecret, passphrase }))
        httpApi.update(apiKey, apiSecret, passphrase)
        await dispatch('updateAccount')
      }
    },

    async batchOpen({ dispatch }, { long, short, amount }) {
      await httpApi.batchOrder([
        httpApi.toOrder(long, 'buy', 'long', 'market', amount),
        httpApi.toOrder(short, 'sell', 'short', 'market', amount)
      ])

      await _.sleep(1000)
      await dispatch('updateAccount')
    },

    async batchClose({ dispatch }, { long, short, amount }) {
      await httpApi.batchOrder([
        httpApi.toOrder(short.instId, 'buy', 'short', 'market', amount),
        httpApi.toOrder(long.instId, 'sell', 'long', 'market', amount)
      ])

      await _.sleep(1000)
      await dispatch('updateAccount')
    }
  }
}