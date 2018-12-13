import { Base } from "../utils/base"

// 获取分享照片
function getPic (data) {
  return new Promise((resole, reject) => {
    Base.post('/Api/activity.ashx', data)
  })
}

function signUp (data) {
  return new Promise((resole, reject) => {
    Base.post('/App/Customer/Register.aspx', data)
  })
}

export { signUp, getPic }