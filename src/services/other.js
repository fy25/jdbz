import { Base } from "../utils/base"

function access (data) {
  return Base.get('https://api.weixin.qq.com/cgi-bin/token', data)
}

// function sharePic (data) {
//   return Base.post('/Api/activity.ashx', data)
// }

function sharePic (data) {
  return Base.get('/Api/get_common.ashx', data)
}


export { access, sharePic }