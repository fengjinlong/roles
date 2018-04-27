import router from './router'
import store from './store'
const whiteList = ['/', '/err']

router.beforeEach((to, from, next) => {
  let getToken = sessionStorage.token
  if (getToken) {
    if (to.path === '/') {
      next({ path: '/login' })
    } else {
      if (store.getters.roles.length === 0) {
        // 获取权限
        store.dispatch('GetRoles').then(res => {
          console.log(res)
          let role = res.data
          store.dispatch('addRoutes', role).then(() => {
            // console.log('add: ' + store.getters.addRouters)
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
