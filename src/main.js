// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {vscroll, vfocus} from './directive/index.js'
import components from './components/index'
import vueTap from 'v-tap';
import store from './store/index'

Vue.use(vscroll)
Vue.use(vfocus)
Vue.use(vueTap);
Vue.config.productionTip = false

for( var key in components){
  Vue.component(`v${key}`, components[key])
}
router.beforeEach((to, from, next) => {
  console.log(to)
  var {auth=false} = to.meta
  var isLogin = !!store.state.user.user.account //vuex的模块下的use user.user
  if(auth && !isLogin && to.path !== '/login'){
    store.state.aimRoute = to
    next('/login')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
