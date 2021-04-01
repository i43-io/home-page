import { v5 } from 'okex-api'

const httpApi = new v5.HttpApi()

export default {
  namespaced: true,
  state: {},
  actions: {
    async init() {
      console.log(await httpApi)
    }
  }
}