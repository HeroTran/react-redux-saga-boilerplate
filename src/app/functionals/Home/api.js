import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function getHome() {
  const urlParam = ``;
  const request = {
    url: `${API_URL.API_HOME}${urlParam}`,
  };
  return apiHelper.apiGet(request);
}
