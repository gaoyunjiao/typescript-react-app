/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 15:55:25
 */
import { ActionType } from '../utils/dataType'

function whetherReducer(state = {}, action: ActionType) {
    switch(action.type) {
        case 'LOAD_SUCCESS':
            const { payload: { data } } = action
            return data;
        case 'LOAD_ERROR': 
            return {
                data: []
            }
        default:
            return state;
    }
}

export default whetherReducer