import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../actions/action-types';

export function* handleTokenAsync(action) {
  //   console.log(action);
  yield put({type: types.RETRIEVE_TOKEN});
}

export const counterSagaToken = [
  takeEvery(types.RETRIEVE_TOKEN_ASYNC, handleTokenAsync),
];

export default counterSagaToken;
