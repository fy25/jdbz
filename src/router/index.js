import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/views/sign'
import Login from '@/views/login'
import Personal from '@/views/personal'
import Bill from '@/views/bill'
import Recharge from '@/views/recharge'

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
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
  ]
})
