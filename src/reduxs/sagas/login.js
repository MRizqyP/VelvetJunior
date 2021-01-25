import * as types from '../actions/action-types';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {delay} from 'redux-saga';

export function* handleLogin(action) {
  // yield put({type: types.LOGIN});
  try {
    const apiConfig = {
      method: 'post',
      url: 'http://175.41.132.255:8080/api/auth/login',
      data: {
        email: action.payload.email,
        password: action.payload.password,
      },
    };

    const response = yield call(axios, apiConfig);
    // console.log(response.data.data);
    if (response.data.statusCode === 200) {
      yield put({type: types.LOGIN, payload: response.data.data});
    } else {
      yield put({type: types.LOGIN_GAGAL, payload: response.data});
    }
  } catch (e) {
    console.log(e);
    yield put({type: types.API_REQUEST_FAILED, payload: e.message});
  }
}

export const counterSagaToken = [takeEvery(types.LOGIN_REQ, handleLogin)];

export default counterSagaToken;
