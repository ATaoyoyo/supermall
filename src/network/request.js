import axios from 'axios'

export function request (config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh/',
    // timeout: 10000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => { console.log(err) })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => { console.log(err) })

  // 返回一个Promise
  return instance(config)
}