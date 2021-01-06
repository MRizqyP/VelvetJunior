import * as types from '../actions/action-types';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {handleIncrementAsync} from './counter';

export function* handleApiRequest(action) {
  try {
    const apiConfig = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        section_id: action.payload.section_id,
      },
    };

    const response = yield call(axios, apiConfig);
    console.log(response);
    yield put({type: types.API_REQUEST_SUCCEEDED, payload: response.data});
  } catch (e) {
    console.log(e);
    yield put({type: types.API_REQUEST_FAILED, payload: e.message});
  }
}

export const apiTesterSaga = [takeEvery(types.API_REQUEST, handleApiRequest)];

export default apiTesterSaga;
