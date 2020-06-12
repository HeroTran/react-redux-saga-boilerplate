import actionTypes from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
}

export function loginFailure(error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error,
  };
}

export function logoutRequest() {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function logoutFailure(error) {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    error,
  };
}

export function sendForgotMailRequest(data) {
  return {
    type: actionTypes.SEND_FORGOT_MAIL_REQUEST,
    data,
  };
}

export function sendForgotMailSuccess() {
  return {
    type: actionTypes.SEND_FORGOT_MAIL_SUCCESS,
  };
}

export function sendForgotMailFailure(error) {
  return {
    type: actionTypes.SEND_FORGOT_MAIL_FAILURE,
    error,
  };
}

export function sendChangePassRequest(data) {
  return {
    type: actionTypes.SEND_CHANGE_PASS_REQUEST,
    data,
  };
}

export function sendChangePassSuccess(data) {
  return {
    type: actionTypes.SEND_CHANGE_PASS_SUCCESS,
    data,
  };
}

export function sendChangePassFailure(error) {
  return {
    type: actionTypes.SEND_CHANGE_PASS_FAILURE,
    error,
  };
}

export function resetAllForgot() {
  return {
    type: actionTypes.RESET_ALL_FORGOT,
  };
}
