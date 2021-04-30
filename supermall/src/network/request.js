import axios from "axios";

export function request(config) {
  const request = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  request.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  request.interceptors.response.use(res => {
    return res
  }, err => {
    return err
  })

  return request(config)

}
