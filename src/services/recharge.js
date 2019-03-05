import { Base } from "../utils/base"

// 套餐充值
function rechargeMeal (data) {
  return Base.post('/Api/top_up.ashx', data)
}

// 订单列表
function integration (data) {
  return Base.post('/Api/top_up.ashx', data)
}

// 提现
function withdraw (data) {
  return Base.post('/Api/im_info.ashx', data)
}

// 下单拉起支付
function pay (data) {
  return Base.post('/WeZ/WeChatPay/Signature.aspx', data)
}


export { rechargeMeal, integration, withdraw, pay }
