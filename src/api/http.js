import axios from 'axios'
// 超时时间
// http请求拦截器
axios.interceptors.request.use(config => {
  // element ui Loading方法
  console.log('统一拦截请求')
  return config
}, error => {
  console.log('统一拦截请求失败')
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  console.log('统一拦截响应')
  return data
}, error => {
  console.log('统一拦截响应失败')
  return Promise.reject(error)
})

export default axios
