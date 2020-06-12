import actionTypes from './actionTypes';

export const loadingEnable = () => {
  return {
    type: actionTypes.IS_LOADING_ENABLE_SUCCESS,
  };
};

export const loadingDisable = () => {
  return {
    type: actionTypes.IS_LOADING_DISABLE_SUCCESS,
  };
};

export const authentication401 = (isError) => {
  return {
    type: actionTypes.AUTHENTICATION_401,
    isError,
  };
};

export const getCountriesRequest = () => {
  return {
    type: actionTypes.GET_COUNTRIES_REQUEST,
  };
};

export const getCountriesSuccess = (data) => {
  return {
    type: actionTypes.GET_COUNTRIES_SUCCESS,
    data,
  };
};

export const getCountriesFailure = (error) => {
  return {
    type: actionTypes.GET_COUNTRIES_FAILURE,
    error,
  };
};

export const getListTimeZoneRequest = () => {
  return {
    type: actionTypes.GET_TIMEZONE_REQUEST,
  };
};

export const getListTimeZoneSuccess = (data) => {
  return {
    type: actionTypes.GET_TIMEZONE_SUCCESS,
    data,
  };
};

export const getListTimeZoneFailure = (error) => {
  return {
    type: actionTypes.GET_TIMEZONE_FAILURE,
    error,
  };
};

export const resetCommon = () => {
  return {
    type: actionTypes.RESET_COMMON,
  };
};
