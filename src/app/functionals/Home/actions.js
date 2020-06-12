import actionTypes from './actionTypes';

export function getHometRequest(params) {
  return {
    type: actionTypes.GET_HOME_REQUEST,
    params,
  };
}

export function getHometSuccess(data) {
  return {
    type: actionTypes.GET_HOME_SUCCESS,
    data,
  };
}

export function getHometFailure(error) {
  return {
    type: actionTypes.GET_HOME_FAILURE,
    error,
  };
}
