import * as types from './action-types';

export function RETRIEVE_PIN() {
  return {
    type: types.RETRIEVE_PIN,
  };
}
export function PIN_REQ(payload) {
  return {
    type: types.PIN_REQ,
    payload: payload,
  };
}
export function SET_PIN(payload) {
  return {
    type: types.SET_PIN,
    payload: payload,
  };
}

// export function LOGIN(payload) {
//   return {
//     type: types.LOGIN,
//     payload: payload,
//   };
// }

// export function LOGOUT() {
//   return {
//     type: types.LOGOUT,
//   };
// }
