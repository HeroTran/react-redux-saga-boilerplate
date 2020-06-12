import { connect } from 'react-redux';
import App from '../../components/App/App';
import {
  makeSelectIsLoading,
  makeSelectIsAuthentication,
} from '../../functionals/Common/selectors';
import { makeSelectUserState } from '../../functionals/AuthUser/selectors';
import { logoutRequest } from '../../functionals/AuthUser/actions';

const mapStateToProps = (state) => {
  return {
    isLoading: makeSelectIsLoading(state),
    isAuthentication401: makeSelectIsAuthentication(state),
    userInfo: makeSelectUserState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => {
      dispatch(logoutRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
