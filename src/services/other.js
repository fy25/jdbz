import { Base } from "../utils/base"

function access(data) {
  return Base.get('https://api.weixin.qq.com/cgi-bin/token', data)
}


export { access }