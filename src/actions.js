import axios from "axios";

export const APP_INITIATED = "APP_INITIATED";

const appinitiated = () => {
  return {
    type: APP_INITIATED
  };
};

export const initiate = () => {
  return dispatch => {
    return dispatch(appinitiated());
  };
};

export const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
export const ERROR_SIGNUP = "ERROR_SIGNUP";

const successsignup = data => {
  return {
    type: SUCCESS_SIGNUP,
    data: data
  };
};

const errorsignup = err => {
  return {
    type: ERROR_SIGNUP,
    err: err
  };
};

export const signup = data => {
  return dispatch => {
    return axios
      .post("http://localhost:8080/user/signup", {
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          data: data
        }
      })
      .then(res => dispatch(successsignup(res.data)))
      .catch(err => dispatch(errorsignup(err.response.data)));
  };
};

export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

const successlogin = data => {
  return {
    type: SUCCESS_LOGIN,
    data: data
  };
};

const errorlogin = err => {
  return {
    type: ERROR_LOGIN,
    err: err
  };
};

export const login = data => {
  return dispatch => {
    return axios
      .post("http://localhost:8080/user/login", {
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          data: data
        }
      })
      .then(res =>
        dispatch(
          successlogin({
            token: res.headers["x-jwt-token"],
            username: res.headers["username"]
          })
        )
      )
      .catch(err => dispatch(errorlogin(err.response.data)));
  };
};

export const LOGOUT_INITIATE = "LOGOUT_INITIATE";

const initiatelogout = () => {
  return {
    type: LOGOUT_INITIATE
  };
};

export const logout = () => {
  return dispatch => {
    return dispatch(initiatelogout());
  };
};
