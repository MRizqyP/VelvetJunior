import {combineReducers} from 'redux';

import counter from './counter';
import apiTester from './api-tester';

export const reducer = combineReducers({
  counter,
  apiTester,
});
