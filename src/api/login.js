import axios from 'axios'
import store from '../store'

export function getRoles (token) {
  // inter()
  const url = '/api/getrole?token='
  return axios.get(url + token).then((res) => {
    return Promise.resolve(res)
  })
}

export function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(router => {
    if (hasPermission(roles, router)) {
      // 暂定router没有children
      // if (router.children && router.children.length) {
      //   router.children = filterAsyncRouter(router.children, roles)
      // }
      return true
    }
    return false
  })
  return accessedRouters
}

function hasPermission (roles, router) {
  if (router.meta && router.meta.role) {
    // 暂定roles就是一个角色，且为一个字符串
    return router.meta.role.indexOf(roles) >= 0
    // 暂定roles是很多角色，且为数组
    // return roles.some(role => router.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

export function test (token) {
  // inter()
  const url = '/api/test'
  return axios.get(url).then((res) => {
    return Promise.resolve(res)
  })
}
export function test1 (token) {
  const url = '/api/test1'
  return axios.get(url).then((res) => {
    return Promise.resolve(res)
  })
}
function inter () {
  // console.log('token :' + store.getters.token)
  // console.log(666666666666)
  axios.interceptors.request.use(
    config => {
      // console.log(store.getters.token)
      if (store.getters.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.getters.token}`
        // console.log(config.headers)
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })

  // axios.interceptors.request.use(function (config) {
  //   // Do something before request is sent
  //   console.log(config)
  //   console.log('开始请求')
  //   console.log(`请求地址: ${config.url}`)
  //   console.log(`请求地址: ${config.url}`)
  //   return config
  // }, function (error) {
  //   // Do something with request error
  //   console.log('请求失败')
  //   return Promise.reject(error)
  // })
  axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    console.log('接收响应66')
    console.log(config)
    return config
  }, function (error) {
    // Do something with request error
    console.log('响应出错')
    return Promise.reject(error)
  })
}
