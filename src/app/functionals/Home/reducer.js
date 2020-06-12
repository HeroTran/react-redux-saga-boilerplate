import { fromJS } from 'immutable';
import { PAGE_FORMAT } from '../Common/constants';

const initialState = fromJS({
  home: [],
  pagination: {
    current_page: PAGE_FORMAT.PAGE_DEFAULT,
    page_size: PAGE_FORMAT.SIZE_FIVE,
    total: PAGE_FORMAT.TOTAL_DEFAULT,
  },
  error: null,
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
