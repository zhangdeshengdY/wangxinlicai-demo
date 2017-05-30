import Vue from 'vue'
import Vuex from 'vuex' 
Vue.use(Vuex)
const LOGININ = 'LOGININ'
const LOGINOUT = 'LOGINOUT'
export default new Vuex.Store({
  state: {
    user: localStorage.getItem('user') || {},
  },
  mutations: {
    [LOGININ] (state, {user}) {
      state.user = user
      localStorage.setItem('user')
    },
    [LOGINOUT] (state) {
      state.user = {}
      localStorage.clear()
    }
  },
  actions: {
    [LOGININ] ({commit}) {
      commit(LOGININ)
    },
    [LOGININ] ({commit}) {
      commit(LOGINOUT)
    }
  }
})