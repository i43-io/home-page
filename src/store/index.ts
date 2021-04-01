import { createStore } from 'vuex'

import okex from './okex'

export default createStore({
  state: {
    currentInstId: ''
  },
  mutations: {
    setCurrentInstId(state, instId) {
      state.currentInstId = instId
    }
  },
  actions: {
  },
  modules: {
    okex
  }
})
