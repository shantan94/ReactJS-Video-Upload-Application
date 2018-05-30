import {
  SUCCESS_SIGNUP,
  ERROR_SIGNUP,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  LOGOUT_INITIATE,
  APP_INITIATED
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS_SIGNUP:
      return { ...state, ...action };
    case ERROR_SIGNUP:
      return { ...state, ...action };
    case SUCCESS_LOGIN:
      return { ...state, ...action };
    case ERROR_LOGIN:
      return { ...state, ...action };
    case LOGOUT_INITIATE:
      return { ...state, ...action };
    case APP_INITIATED:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default reducer;
