import axios from 'axios'
export function getRoles (token) {
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
