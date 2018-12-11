// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Base } from "@/utils/base";
import Vuex from "vuex"

import './assets/js/rem.js'
import './assets/css/normalize.css'
import './assets/css/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$base = Base;

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
