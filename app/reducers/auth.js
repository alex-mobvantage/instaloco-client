import { LOGGED_IN, LOGGED_OUT } from '../actions/auth';

export const login = (state = {logged_in : false, multi_user: false}, action) => {
  switch (action.type){
    case LOGGED_IN:
      return Object.assign({}, state, {
        logged_in: true,
        access_token: action.access_token,
        multi_user: false
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        logged_in: false,
        access_token: null,
        multi_user: true
      });
    default:
      return state;
  }
};