import { createSelector } from 'reselect';

export const getCommonState = (state) => {
  return state.get('common');
};
export const makeSelectIsLoading = createSelector(getCommonState, (common) =>
  common.get('isLoading')
);

export const makeSelectIsAuthentication = createSelector(
  getCommonState,
  (common) => common.get('isAuthentication401')
);

export const makeSelectCountries = createSelector(getCommonState, (common) => {
  if (common) {
    const countries = common.get('countries');
    return countries ? countries.toJS() : [];
  }
});

export const makeSelectTimeZones = createSelector(getCommonState, (common) => {
  if (common) {
    const timeZone = common.get('timeZone');
    return timeZone ? timeZone.toJS() : [];
  }
});
