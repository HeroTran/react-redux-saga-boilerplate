import { takeLatest, put, all, take } from 'redux-saga/effects';
import {
  loadingEnable,
  loadingDisable,
  getCountriesSuccess,
  getCountriesFailure,
  getListTimeZoneSuccess,
  getListTimeZoneFailure,
} from './actions';
import { getListTimezone } from '../../utils/apiHelper';
import { setLocalStore, getLocalStore } from '../../utils/localStoreHelper';
import actiontypes from './actionTypes';
import { LOCAL_STORAGE_KEY } from './constants';
import * as api from './api';

function* setLoadingEnable() {
  yield put(loadingEnable());
}

function* setLoadingDisable() {
  yield put(loadingDisable());
}

function* getCountriesRequest() {
  try {
    let countries = getLocalStore(LOCAL_STORAGE_KEY.LIST_COUNTRIES);
    if (!countries) {
      const { data } = yield api.getCountries();
      countries = data ? data.data : null;
      yield setLocalStore(LOCAL_STORAGE_KEY.LIST_COUNTRIES, countries);
    }
    yield put(getCountriesSuccess(countries));
    yield put({ type: actiontypes.IS_COMPLETE_GET_COUNTRIES });
  } catch (err) {
    yield put(getCountriesFailure(err));
  }
}

function* getListTimeZoneRequest() {
  try {
    let timeZone = getLocalStore(LOCAL_STORAGE_KEY.LIST_TIME_ZONE);
    if (!timeZone) {
      const { data } = yield getListTimezone();
      timeZone = data ? data.zones : null;
      yield setLocalStore(LOCAL_STORAGE_KEY.LIST_TIME_ZONE, timeZone);
    }
    yield put(getListTimeZoneSuccess(timeZone));
    yield put({ type: actiontypes.IS_COMPLETE_GET_TIMEZONE });
  } catch (err) {
    yield put(getListTimeZoneFailure(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(actiontypes.IS_LOADING_ENABLE_REQUEST, setLoadingEnable),
    takeLatest(actiontypes.IS_LOADING_DISABLE_REQUEST, setLoadingDisable),
    takeLatest(actiontypes.GET_COUNTRIES_REQUEST, getCountriesRequest),
    takeLatest(actiontypes.GET_TIMEZONE_REQUEST, getListTimeZoneRequest),
  ]);
}
