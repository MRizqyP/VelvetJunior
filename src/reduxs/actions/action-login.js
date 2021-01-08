import * as types from './action-types';

export function RETRIEVE_TOKEN() {
  return {
    type: types.RETRIEVE_TOKEN,
  };
}

export function LOGIN() {
  return {
    type: types.LOGIN,
  };
}

export function LOGOUT() {
  return {
    type: types.LOGOUT,
  };
}
