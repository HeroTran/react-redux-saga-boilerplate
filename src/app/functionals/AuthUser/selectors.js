import { createSelector } from 'reselect';

export const getAuthState = (state) => {
  return state.get('authUser');
};

export const makeSelectUserState = createSelector(getAuthState, (user) => {
  const currentUser = user.get('auth').get('currentUser');
  if (currentUser && currentUser.get('email')) {
    return currentUser && currentUser.toJS();
  }
  return null;
});

export const makeSelectErrorLoginState = createSelector(
  getAuthState,
  (user) => {
    const error = user.get('auth').get('error');
    return error ? error.toJS() : '';
  }
);

export const makeSelectCodeChangePassState = createSelector(
  getAuthState,
  (user) => {
    return user.get('forgot').get('isSentCode');
  }
);

export const makeSelectErrorSentCodeForgotState = createSelector(
  getAuthState,
  (user) => {
    return user.get('forgot').get('errorSent');
  }
);
export const makeSelectResetSuccessState = createSelector(
  getAuthState,
  (user) => {
    return user.get('forgot').get('isResetSuccess');
  }
);
export const makeSelectErrorResetForgotState = createSelector(
  getAuthState,
  (user) => {
    return user.get('forgot').get('errorReset');
  }
);
