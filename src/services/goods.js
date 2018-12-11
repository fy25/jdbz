import { Base } from "../utils/base"

// 获取商品列表
function goodList(params) {
    return Base.post('/Api/goods.ashx', params)
}

// 兑换商品
function exchangeGoods(params) {
    return Base.post('/Api/goods.ashx', params)
}

export { goodList, exchangeGoods }