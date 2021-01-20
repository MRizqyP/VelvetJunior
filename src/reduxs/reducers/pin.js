import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  userPin: null,
  isError: null,
  authPin: false,
};

export default function pinReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_PIN:
      return {
        ...state,
        userPin: action.token,
        isLoading: false,
        isError: action.error,
        authPin: action.authPin,
      };
    case types.SET_PIN:
      return {
        ...state,
        userPin: action.payload.pin,
        isLoading: false,
        isError: action.error,
        authPin: action.payload.authPin,
      };

    default:
      return state;
  }
}
