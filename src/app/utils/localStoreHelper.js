import { LOCAL_STORAGE_KEY, ROLE } from '../functionals/Common/constants';

export function setLocalStore(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStore(key) {
  const data = localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
}

export function removeLocalStore(key) {
  localStorage.removeItem(key);
}

export function getAccessToken() {
  const currentUser = getLocalStore(LOCAL_STORAGE_KEY.CURRENT_USER);
  if (currentUser != null) {
    return currentUser.token;
  }
  return '';
}

export function getAuthorizationHeader() {
  return `Bearer ${getAccessToken()}`;
}

export function getCurrentUser() {
  const currentUser = getLocalStore(LOCAL_STORAGE_KEY.CURRENT_USER);
  if (currentUser != null) {
    return currentUser;
  }
  return '';
}

export function removeAllLocalStore() {
  localStorage.removeItem(LOCAL_STORAGE_KEY.CURRENT_USER);
  localStorage.removeItem(LOCAL_STORAGE_KEY.USER_TIMEZONE);
  localStorage.removeItem(LOCAL_STORAGE_KEY.LEARNER_SELECTED_ID);
  localStorage.removeItem(LOCAL_STORAGE_KEY.LIST_COUNTRIES);
  localStorage.removeItem(LOCAL_STORAGE_KEY.LIST_TIME_ZONE);
}

export function isCheckAuth() {
  const currentUser = getCurrentUser();
  return currentUser && currentUser.role === ROLE.ROLE_TEACHER;
}

export function getTeacherCode() {
  const currentUser = getCurrentUser();
  return currentUser ? currentUser.teacher_code : '';
}
