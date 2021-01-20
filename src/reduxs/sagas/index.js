import {fork, all} from 'redux-saga/effects';

import {counterSaga} from './counter';
import {apiTesterSaga} from './api-tester';
import {counterSagaToken} from './login';
import {counterSagaPIN} from './pin';

export default function* rootSaga() {
  yield all([
    ...counterSaga,
    ...apiTesterSaga,
    ...counterSagaToken,
    ...counterSagaPIN,
  ]);
}
