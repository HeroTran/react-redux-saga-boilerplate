import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function getCountries() {
  const request = {
    url: `${API_URL.API_GET_LIST_COUNTRIES}`,
  };
  return apiHelper.apiGet(request);
}
