/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 13:19:19
 */

import { combineReducers } from 'redux';

// components reducers
import helloReducer from './hello';
import whetherReducer from './whether';

const reducers = combineReducers({
    helloReducer,
    whetherReducer
});

export default reducers;