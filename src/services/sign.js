import { Base } from "../utils/base"

function getPic (data) {
  return Base.post('/Api/activity.ashx', data)
}

function signIn (data) {
  return Base.post('/Api/activity.ashx', data)
}

export { signUp, getPic, signIn }
