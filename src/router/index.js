import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export const constantRouterMap = [
  { path: '/', component: login },
  { path: '/home', component: _import('home') }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/powerA',
    component: _import('powera'),
    name: '权限测试',
    meta: { role: ['admin'] }
  },
  {
    path: '/powerB',
    component: _import('powerb'),
    meta: { role: ['admin', 'superb'], title: 'powerB' }
  },
  {
    path: '/powerC',
    component: _import('powerc')
  },
  { path: '*', component: _import('user'), hidden: true }
]
