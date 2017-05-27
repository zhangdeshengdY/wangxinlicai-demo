import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Detail from '../pages/detail/index'
import My from '../pages/my/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/deal/detail',
      component: Detail
    },
    {
      path: '/my',
      component: My
    }
  ]
})
