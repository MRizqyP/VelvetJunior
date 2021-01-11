import * as types from '../actions/action-types';

const initialState = {
  apiMsg: '',
  data: null,
};

export default function apiTester(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_REQUEST_SUCCEEDED:
      return {
        ...state,
        apiMsg: 'API called succeeded!',
        data: action.payload.id,
      };
    case types.API_REQUEST_FAILED:
      return {
        ...state,
        apiMsg: 'API called failed!',
      };
    default:
      return state;
  }
}
