import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export const constantRouterMap = [
  { path: '/', component: _import('first') },
  { path: '/login', component: _import('login') },
  { path: '/home', component: _import('home') }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/powerA',
    kid: '1',
    component: _import('powera'),
    name: 'admin1',
    meta: { role: ['admin'] }
  },
  {
    path: '/powerB',
    kid: '2',
    name: 'admin superb',
    component: _import('powerb'),
    meta: { role: ['admin', 'superb'], title: 'powerB' }
  },
  {
    path: '/powerC',
    kid: '3',
    component: _import('powerc')
  },
  { path: '*', component: _import('err'), hidden: true }
]
