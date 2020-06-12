/*import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from '../../../app/renderer/components/AuthUser/ForgotPassword';

let wrapper;
let handleSendEmail;
let handleChangePassword;
let handleResetAllForgot;
beforeEach(() => {
  handleSendEmail = jest.fn();
  handleChangePassword = jest.fn();
  handleResetAllForgot = jest.fn();
  wrapper = (
    <MemoryRouter>
      <ForgotPassword
        isLoading={false}
        isResetSuccess={false}
        isSentCode={false}
        errorSent={false}
        errorReset={false}
        handleSendEmail={handleSendEmail}
        handleChangePassword={handleChangePassword}
        handleResetAllForgot={handleResetAllForgot}
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