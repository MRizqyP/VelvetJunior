import {fork, all} from 'redux-saga/effects';

import {counterSaga} from './counter';
import {apiTesterSaga} from './api-tester';

export default function* rootSaga() {
  yield all([...counterSaga, ...apiTesterSaga]);
}
