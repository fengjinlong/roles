const state = {
  user: {
    roles: [],
    token: sessionStorage.getItem('token') || ''
  },
  addRouters: []
}
export default state
