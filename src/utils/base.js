import { post } from "./axios.js";
const Base = {
  post (url, data) {
    return post(url, data);
  }
}

export { Base };