import { v5 } from 'okex-api'
import { ref } from 'vue'

import config from './config'

const { apiKey, apiSecret, passphrase } = config.value.okex
const httpApi = new v5.HttpApi(apiKey, apiSecret, passphrase, { baseURL: 'https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod' })

export const accounts = ref([])
export const positions = ref([])

export async function updateAccount() {
  const coins = ['ETH', 'BTC', 'USDT']
  const { details } = await httpApi.getAccounts(coins)
  accounts.value = details

  positions.value = [
    ...await httpApi.getPositions('FUTURES'),
    ...await httpApi.getPositions('SWAP')
  ]
}

updateAccount()