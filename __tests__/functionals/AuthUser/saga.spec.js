
/*import { put } from 'redux-saga/effects';
import * as api from '../../../app/renderer/functionals/AuthUser/api';
import { login } from '../../../app/renderer/functionals/AuthUser/saga';

describe('login()', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  const data = {
    id: 0,
    teacher_id: 0,
    teacher_code: '',
    username: '',
    email: '',
    fullname: '',
    avatar_url: '',
    gender: 0,
    dob: '',
    user_type: 0,
    role: '',
    timezone: '',
    token: '',
  };

  it('Login success', () => {
    const action = {
      email: 'hungteacher@1on1english.vn',
      password: '12345',
    };
    const gen = login(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    const response = { data: { data } };
    expect(gen.next().value).toEqual(
      api.loginUser(action.email, action.password)
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'LOGIN_SUCCESS'
    );
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
  it('Login fail', () => {
    const action = {
      email: 'hungteacher@1on1english.vn',
      password: '123456',
    };
    const gen = login(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    expect(gen.next().value).toEqual(
      api.loginUser(action.email, action.password)
    );
    const response = {};
    expect(gen.next(response).value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'LOGIN_FAILURE'
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
*/