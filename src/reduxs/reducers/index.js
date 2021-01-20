import {combineReducers} from 'redux';

import counter from './counter';
import apiTester from './api-tester';
import login from './login';
import pin from './pin';

export const reducer = combineReducers({
  counter,
  apiTester,
  login,
  pin,
});
