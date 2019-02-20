import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/pages/home'
// import about from '@/pages/about'
// import HelloWorld from '@/components/HelloWorld'

// 按需加载, 分开打包 写法
// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const about = r => require.ensure([], () => r(require('@/pages/about')), 'about')
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')


Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
