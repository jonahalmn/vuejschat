import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Messages from '@/pages/Messages'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    ,
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    }
  ]
})