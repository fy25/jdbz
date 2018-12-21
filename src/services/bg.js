import { Base } from "../utils/base"

// 获取背景图
function getBg (data) {
    return Base.post('/Api/activity.ashx', data)
}

// 上传图片
function upLoad (data) {
    return Base.post('/Api/get_common.ashx', data)
}





export { getBg, upLoad }