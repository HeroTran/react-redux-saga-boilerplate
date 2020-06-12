import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const initialState = fromJS({
  isLoading: false,
  isAuthentication401: false,
  countries: [],
  timeZone: [],
  error: null,
});

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IS_LOADING_ENABLE_SUCCESS:
      return state.set('isLoading', true);
    case actionTypes.IS_LOADING_DISABLE_SUCCESS:
      return state.set('isLoading', false);
    case actionTypes.GET_COUNTRIES_SUCCESS:
      const countries = fromJS(action.data);
      return state.set('countries', countries).set('error', null);
    case actionTypes.GET_TIMEZONE_SUCCESS:
      const timeZone = fromJS(action.data);
      return state.set('timeZone', timeZone).set('error', null);
    case actionTypes.GET_TIMEZONE_FAILURE:
    case actionTypes.GET_COUNTRIES_FAILURE:
      const error = fromJS(action.error);
      return state.set('error', error);
    case actionTypes.AUTHENTICATION_401:
      return state.set('isAuthentication401', action.isError);
    case actionTypes.RESET_COMMON:
      return initialState;
    default:
      return state;
  }
}
