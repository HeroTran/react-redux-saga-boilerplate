import { takeLatest, all } from 'redux-saga/effects';
import actiontypes from './actionTypes';

function* getCommon() {
  try {
    yield 'getCommon';
  } catch (err) {
    yield 'getCommon err';
  }
}

export default function* root() {
  yield all([takeLatest(actiontypes.IS_LOADING_ENABLE_REQUEST, getCommon)]);
}
