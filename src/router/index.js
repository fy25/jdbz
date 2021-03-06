import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/views/sign'
import Login from '@/views/login'
import Personal from '@/views/personal'
import Bill from '@/views/bill'
import Recharge from '@/views/recharge'
import Point from '@/views/point'
import Exchange from '@/views/exchange'
import Brokerage from '@/views/brokerage'
import Withdraw from '@/views/withdraw'
import Team from '@/views/team'
import Share from '@/views/share'
import Poster from '@/views/poster'
import Payment from '@/views/payment'
import Test from '@/views/test'
import Setting from '@/views/setting'
import Forget from '@/views/forget'
import Select from '@/views/select'
import Avatar from '@/views/avatar'
import Name from '@/views/name'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
    {
      path: '/point',
      name: 'Point',
      component: Point
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/brokerage',
      name: 'Brokerage',
      component: Brokerage
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/poster',
      name: 'Poster',
      component: Poster
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    }
  ]
})
