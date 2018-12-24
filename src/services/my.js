import { Base } from "../utils/base"

// 我的佣金记录
function brokerageList (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 佣金提现
function withdraw (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 优惠活动简介
function activity (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 一级分销
function firstDistribution (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 二级分销
function secondDistribution (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 消费订单记录
function orderList (params) {
    return Base.post('/Api/im_info.ashx', params)
}

// 提交头像
function avatar (params) {
    return Base.post('/Api/activity.ashx', params)
}

// 修改密码
function changePas (params) {
    return Base.post('/Api/activity.ashx', params)
}

// 获取我的积分、余额、佣金
function getOther (params) {
    return Base.post('/Api/im_info.ashx', params)
}

export { changePas, avatar, brokerageList, withdraw, activity, firstDistribution, secondDistribution, orderList, getOther }