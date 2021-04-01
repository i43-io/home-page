import { createStore } from 'vuex'

import okex from './okex'

export default createStore({
  state: {
    currentInstId: 'ETH-USD-210625'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    okex
  }
})
