import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/views/sign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    }
  ]
})
