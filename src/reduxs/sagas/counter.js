import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../actions/action-types';

export function* handleIncrementAsync(action) {
  console.log(action);
  yield put({type: types.INCREMENT});
}

export const counterSaga = [
  takeEvery(types.INCREMENT_ASYNC, handleIncrementAsync),
];

export default counterSaga;
