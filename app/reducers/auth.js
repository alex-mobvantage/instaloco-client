import { BEGIN_LOGIN_FROM_CACHED_CREDENTIALS, LOGGED_IN, LOGGED_OUT } from '../actions/auth';

export const login = (state = {logged_in : false, cached_credentials: false}, action) => {
  switch (action.type){
    case BEGIN_LOGIN_FROM_CACHED_CREDENTIALS:
      return Object.assign({}, state, {
        cached_credentials: true
      });
    case LOGGED_IN:
      return Object.assign({}, state, {
        logged_in: true,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        logged_in: false,
        cached_credentials: false
      });
    default:
      return state;
  }
};