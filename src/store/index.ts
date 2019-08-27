/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 13:10:55
 */
// redux 和 react-redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//middleWare
import mySaga from '../sagas';

// reducer
import reducers from '../reducers';

// create store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

// run sagas
sagaMiddleware.run(mySaga)

export default store;