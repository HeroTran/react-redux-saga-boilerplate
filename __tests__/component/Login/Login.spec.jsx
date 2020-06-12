/*import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../../app/renderer/components/AuthUser/Login';

let wrapper;
let handleLogin;
beforeEach(() => {
  handleLogin = jest.fn();
  const currentUser = {
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
  wrapper = (
    <MemoryRouter>
      <Login
        isLoading = {false}
        currentUser={currentUser}
        errorAuth={null}
        handleLogin={handleLogin}
      />
    </MemoryRouter>
  );
});
describe('should be rendered without error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
*/