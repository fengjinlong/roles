import axios from 'axios'
export function getRoles (token) {
  const url = '/api/getrole?token='
  return axios.get(url + token).then((res) => {
    return Promise.resolve(res)
  })
}

export function filterAsyncRouter (token) {
  const url = '/api/getrole?token='
  return axios.get(url + token).then((res) => {
    return Promise.resolve(res)
  })
}
