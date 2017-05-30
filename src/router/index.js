import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Detail from '../pages/detail/index'
import My from '../pages/my/index'
import List from '../pages/list/index'
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
    }
  ]
})
