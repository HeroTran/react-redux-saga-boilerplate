import { createSelector } from 'reselect';

export const getHomeState = (state) => {
  return state.get('home');
};

export const makeSelectClassListState = createSelector(getHomeState, (home) => {
  if (home) {
    const classList = home.get('classList');
    return classList ? classList.toJS() : [];
  }
});

export const makeSelectPaginationState = createSelector(
  getHomeState,
  (home) => {
    if (home) {
      const pagination = home.get('pagination');
      return pagination ? pagination.toJS() : null;
    }
  }
);
