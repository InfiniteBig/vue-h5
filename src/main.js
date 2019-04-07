// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'
// import VueScroller from 'vue-scroller'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/reset.css'
import './assets/css/vux.scss'
import './assets/css/vant.scss'
import './icons'
FastClick.attach(document.body)
Vue.config.productionTip = false
// Vue.use(VueScroller)
Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
