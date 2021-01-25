import {combineReducers} from 'redux';

import login from './login';
import pin from './pin';
import auth from './auth';

export const reducer = combineReducers({
  login,
  pin,
  auth,
});
