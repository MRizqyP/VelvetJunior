import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case types.LOGIN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
