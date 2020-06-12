import { all, fork } from 'redux-saga/effects';
import { commonSaga } from './Common';
import { authSaga } from './AuthUser';
import { homeSaga } from './Home';

export const rootSaga = function* root() {
  yield all([fork(commonSaga), fork(authSaga), fork(homeSaga)]);
};
