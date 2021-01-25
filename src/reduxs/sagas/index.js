import {fork, all} from 'redux-saga/effects';

import {counterSagaToken} from './login';
import {counterSagaPIN} from './pin';

export default function* rootSaga() {
  yield all([...counterSagaToken, ...counterSagaPIN]);
}
