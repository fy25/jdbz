import axios from "axios"
import Qs from "qs"
import { Config } from "../config/config"


// 配置项
// axios.defaults.baseURL = Config.server;
axios.defaults.baseURL = '/api';

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}