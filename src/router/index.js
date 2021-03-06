import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Detail from '../pages/detail/index'
import My from '../pages/my/index'
import List from '../pages/list/index'
import Card from '../pages/card/index'
import Start from '../pages/card/start'
import Quick from '../pages/card/quick'
import Success from '../pages/card/success'
import Buy from '../pages/buy/index'

Vue.use(Router)

//auth=true 为登录才能进入组件 ,auth=false为不需要登录就能进入的组件
export default new Router({
  routes: [
    {
      path: '/',
      meta: {auth: false},
      component: Index
    },
    {
      path: '/login',
      meta: {auth: false},
      component: Login
    },
    {
      path: '/register',
      meta: {auth: false},
      component: Register
    },
    {
      path: '/deal/detail',
      meta: {auth: false},
      name: 'detail',
      component: Detail
    },
    {
      path: '/my',
      meta: {auth: true},
      component: My
    },
    {
      path: '/list',
      meta: {auth: false},
      component: List
    },
    {
      path: '/buy',
      meta: {auth: true},
      component: Buy
    },
    {
      path: '/card',
      meta: {auth: true},
      component: Card,
      children: [
        {
          path:'start',
          component: Start
        },
        {
          path: 'quick',
          component: Quick
        },
        {
          path: 'success',
          component: Success
        }
      ]
    }
  ]
})
