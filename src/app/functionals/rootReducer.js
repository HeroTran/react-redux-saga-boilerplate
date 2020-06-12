import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { commonReducer } from './Common';
import { authReducer } from './AuthUser';
import { homeReducer } from './Home';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    authUser: authReducer,
    home: homeReducer,
  });
