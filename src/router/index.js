import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/login'
import Register from '../pages/register/register'

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
    }
  ]
})
