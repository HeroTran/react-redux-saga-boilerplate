import { all, takeLatest } from 'redux-saga/effects';
import actiontypes from './actionTypes';

export function* login() {
  try {
    yield 'login';
  } catch (err) {
    yield 'login';
  }
}

export default function* root() {
  yield all([takeLatest(actiontypes.LOGIN_REQUEST, login)]);
}
