import { Base } from "../utils/base"

// 获取验证码
function getCode (params) {
  return Base.post('/Api/activity.ashx', params)
}


export { getCode }