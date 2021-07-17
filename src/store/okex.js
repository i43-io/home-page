import { v5 } from 'okex-api'
import { ref } from 'vue'

import config from './config'

const { apiKey, apiSecret, passphrase } = config.value.okex
const httpApi = new v5.HttpApi(apiKey, apiSecret, passphrase, { baseURL: 'https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod' })

export const accounts = ref([])
const coins = ['ETH', 'BTC', 'USDT']
httpApi.getAccounts(coins).then(({ details }) => accounts.value = details)