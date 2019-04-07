import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/pages/detail/index'
import Spinner from '@/pages/spinner/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail`',
      component: Detail
    },
    {
      path: '/spinner',
      name: 'Spinner`',
      component: Spinner
    }
  ]
})
