import { Base } from "../utils/base"

function access (data) {
  return new Promise((resole, reject) => {
    Base.post('/App/Customer/Register.aspx', data)
  })
}

export { signUp }