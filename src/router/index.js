import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/views/sign'
import Login from '@/views/login'
import Personal from '@/views/personal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
  ]
})
