import {fork, all} from 'redux-saga/effects';

import {counterSaga} from './counter';
import {apiTesterSaga} from './api-tester';
import {counterSagaToken} from './login';

export default function* rootSaga() {
  yield all([...counterSaga, ...apiTesterSaga, ...counterSagaToken]);
}
