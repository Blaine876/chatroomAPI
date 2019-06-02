import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  AUTH_CHECK_START,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAIL
} from "../actions/types";

const INIT_STATE = {
  email: "test@test.com",
  password: "test123",
  id: null,
  hasError: false,
  errorMessage: "",
  authCheck: false,
  loggedIn: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return { ...state };

    case REGISTER_USER_SUCCESS:
      return { ...state };

    case REGISTER_USER_FAIL:
      return { ...state };

    case LOGIN_USER_START:
      return { ...state };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        id: action.payload,
        hasError: false,
        errorMessage: "",
        loggedIn: true,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
        id: null
      };

    case AUTH_CHECK_START:
      return {
        ...state,
        authCheck: false
      };

    case AUTH_CHECK_SUCCESS:
      return {
        ...state,
        authCheck: true,
        loggedIn: true,
        id: action.payload
      };

    case AUTH_CHECK_FAIL:
      return { ...state, authCheck: true, loggedIn: false, id: null };

    default:
      return state;
  }
};
