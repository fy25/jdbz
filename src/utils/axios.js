import axios from "axios"
import Qs from "qs"
import { Config } from "../config/config"


// 配置项
axios.defaults.baseURL = Config.server;
// axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => {
  return Qs.stringify(data);
};

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}