import * as types from './mutation-types'

const mutations = {
  [types.SET_ROUTERS] (state, roles) {
    state.addRouters = roles
  },
  [types.SET_TOKEN] (state, token) {
    state.user.token = token
  },
  [types.SET_ROLES] (state, routers) {
    state.routers = routers
  }
}

export default mutations
