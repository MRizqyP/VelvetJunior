import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
  userEmail: null,
  isError: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_TOKEN:
      return {
        ...state,
        userEmail: action.email,
        userName: action.name,
        userToken: action.token,
        isLoading: false,
        isError: null,
      };
    case types.LOGIN:
      return {
        ...state,
        userEmail: action.payload.email,
        userName: action.payload.username,
        userToken: action.payload.token,
        isLoading: false,
        isError: null,
      };
    case types.LOGIN_GAGAL:
      return {
        ...state,
        userEmail: null,
        userName: null,
        userToken: null,
        isLoading: false,
        isError: action.payload.errorMessages,
      };
    case types.LOGOUT:
      return {
        ...state,
        userEmail: null,
        userName: null,
        userToken: null,
        isLoading: false,
        isError: null,
      };
    default:
      return state;
  }
}
