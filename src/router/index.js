import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import about from '@/pages/about'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
