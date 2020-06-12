import { all, takeLatest } from 'redux-saga/effects';
import actiontypes from './actionTypes';

export function* getHome() {
  try {
    yield 'Home';
  } catch (err) {
    yield 'Home err';
  }
}

export default function* root() {
  yield all([takeLatest(actiontypes.GET_HOME_REQUEST, getHome)]);
}
