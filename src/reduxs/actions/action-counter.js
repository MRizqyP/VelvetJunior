import * as types from './action-types';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function incrementAsync() {
  return {
    type: types.INCREMENT_ASYNC,
  };
}
