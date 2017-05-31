import Vue from 'vue'
import Vuex from 'vuex' 
import user from './user'
Vue.use(Vuex)
const LOGIN_IN = 'LOGIN_IN'
const LOGIN_OUT = 'LOGIN_OUT'
/**
 * user = {
 *   token: 2352132,
 *   hasBindCard: false,
 *   loginCount: 1,
 *   
 *   
 * }
 */
export default new Vuex.Store({
  state: {
    aimRoute: {}
  },
  modules: {
    user
  }
})