import router from './router'
import store from './store'
const whiteList = ['/login', '/err']

router.beforeEach((to, from, next) => {
  // console.log('zhixing')
  let getToken = sessionStorage.token
  if (getToken !== undefined) {
    // console.log(getToken)
    if (to.path === '/fghfhgfgh') {
      // next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        console.log('roles === 0')
        // 获取权限
        store.dispatch('GetRoles').then(res => {
          // console.log(res)
          let role = res.data
          store.dispatch('addRoutes', role).then(() => {
            // console.log('add: ' + store.getters.addRouters)
            router.addRoutes(store.getters.addRouters)
            next({ ...to, replace: true })
          })
        })
      }
      console.log('len ' + store.getters.roles.length)
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
