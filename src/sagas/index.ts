/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 15:10:40
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api';

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchWhether(action: any) {
   try {
      const data = yield call(Api.requsetData as any);
      yield put({type: "LOAD_SUCCESS", payload: {data}});
   } catch (e) {
      yield put({type: "LOAD_ERROR", payload: {message: e.message}});
   }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("LOAD_START", fetchWhether);
}

export default mySaga;