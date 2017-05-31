export const LOGIN_IN = 'LOGIN_IN'
export const LOGIN_OUT = 'LOGIN_OUT'
export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    [LOGIN_IN] (state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    [LOGIN_OUT] (state) {
      state.user = {}
      localStorage.clear()
    }
  },
  actions: {
    [LOGIN_IN] ({commit}, user) {
      commit(LOGIN_IN, user)
    },
    [LOGIN_OUT] ({commit}) {
      commit(LOGIN_OUT)
    }
  }
}