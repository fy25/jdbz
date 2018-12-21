import { Base } from "../utils/base"

// 获取背景图
function getBg(data) {
    return Base.post('/Api/activity.ashx', data)
}



export { getBg }