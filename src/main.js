// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vscroll from './directive/v-scroll.js'
import components from './components/index'
Vue.use(vscroll)
Vue.config.productionTip = false

for( var key in components){
  Vue.component(`v${key}`, components[key])
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
