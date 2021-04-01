/* eslint-disable */
import { v5 } from 'okex-api'

const httpApi = new v5.HttpApi({ baseURL: 'https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod' })

function parseTicker(t) {
  const [coin,,dd] = t.instId.split('-')
  Object.assign(t, { coin, dd })
  return t
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
      ret[coin].slice(1).forEach(t => {
        const diffSf = t.bidPx - swap.askPx
        const diffFs = swap.bidPx - t.askPx
        if (diffSf > diffFs) {
          t.diff = diffSf
          t.diffRate = diffSf / swap.askPx
        } else {
          t.diff = diffFs
          t.diffRate = diffFs / t.askPx
        }
      })
    }
  }

  return ret
}

export default {
  namespaced: true,
  state: {
    usdTickers: {},
    usdtTickers: {}
  },
  mutations: {
    setTickers(state, { usdTickers, usdtTickers }) {
      state.usdTickers = usdTickers
      state.usdtTickers = usdtTickers
    }
  },
  actions: {
    async init({ commit }) {
      const futuresTickers = (await httpApi.getTickers('FUTURES')).map(parseTicker)
      const swapTickers = (await httpApi.getTickers('SWAP')).map(parseTicker)

      const usdTickers = groupTickers('-USD-', futuresTickers, swapTickers)
      const usdtTickers = groupTickers('-USDT-', futuresTickers, swapTickers)

      commit('setTickers', { usdTickers, usdtTickers })
    }
  }
}