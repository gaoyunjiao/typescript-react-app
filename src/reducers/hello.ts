/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 13:18:09
 */
import { HellData, ActionType } from '../utils/dataType'

const helloData: HellData = {
    total: 3,
    pageSize: 20,
    pageNo: 1,
    data: [
        { id: 1, title: "苹果", content: "苹果好吃" },
        { id: 2, title: "桔子", content: "桔子不太好吃" },
        { id: 3, title: "芒果", content: "芒果有的人不喜欢吃" },
        { id: 4, title: "香蕉", content: "香蕉都喜欢吃" },
        { id: 5, title: "可乐", content: "可乐又称肥宅快乐水" }
    ]
}

function helloReducer(state = helloData, action: ActionType) {
    switch(action.type) {
        case 'SHOW':
            return helloData;
        case 'HIDE': 
            return {
                total: 0,
                pageSize: 0,
                pageNo: 1,
                data: []
            }
        default:
            return state;
    }
}

export default helloReducer