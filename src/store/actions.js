import * as types from './mutation-types'
import { getRoles, filterAsyncRouter } from '@/api/login'
import { asyncRouterMap } from '@/router'

// 获取权限并存如state
export const GetRoles = function ({commit}, state) {
  let token = sessionStorage.token
  return new Promise((resolve, reject) => {
    getRoles(token).then(res => {
      if (res.status !== 200) {
        console.log('error')
        return
      }
      let arr = []
      arr.push(res.data)
      commit(types.SET_ROLES, arr)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
// 获取addRouter并存入state
export const addRoutes = function ({commit}, roles) {
  return new Promise((resolve, reject) => {
    console.log('action: ' + roles)
    let addRouters = []
    // roles is String
    if (roles.indexOf('admin') >= 0) {
      // 拥有所有权限
      addRouters = asyncRouterMap
    } else {
      // 拥有部分权限，并进行筛选filterAsyncRouter(array, string)
      addRouters = filterAsyncRouter(asyncRouterMap, roles)
    }
    commit(types.SET_ROUTERS, addRouters)
    resolve()
  })
}
