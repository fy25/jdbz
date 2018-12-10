import { Base } from "../utils/base"

function goodList(data) {
    // return new Promise((resole, reject) => {
    //     Base.post('/Api/goods.ashx', data)
    // })

    return Base.post('/Api/goods.ashx', data)
}

export { goodList }