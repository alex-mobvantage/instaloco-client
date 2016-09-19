import { LOADED_ACCESS_TOKEN, SAVED_ACCESS_TOKEN, INVALIDATED_ACCESS_TOKEN } from '../actions/auth';

export const login = (state = {logged_in : false, multi_user: false}, action) => {
  switch (action.type){
    case LOADED_ACCESS_TOKEN:
    case SAVED_ACCESS_TOKEN:
      return Object.assign({}, state, {
        logged_in: true,
        access_token: action.access_token,
        multi_user: false
      });
    case INVALIDATED_ACCESS_TOKEN:
      return Object.assign({}, state, {
        logged_in: false,
        access_token: null,
        multi_user: true
      });
    default:
      return state;
  }
};