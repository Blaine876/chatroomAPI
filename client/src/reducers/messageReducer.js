import {
  MESSAGES_LOAD_START,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAIL
} from "../actions/types";

const INIT_STATE = {
  messages: [],
  showActivityIndicator: true,
  hasError: false,
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MESSAGES_LOAD_START:
      return { ...state, showActivityIndicator: true };

    case MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        showActivityIndicator: false,
        messages: action.payload
      };

    case MESSAGES_LOAD_FAIL:
      return {
        ...state,
        showActivityIndicator: false,
        hasError: true,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
