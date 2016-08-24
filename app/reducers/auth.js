import { LOADED_ACCESS_TOKEN, SAVED_ACCESS_TOKEN, INVALIDATE_ACCESS_TOKEN } from '../actions/auth';

export const login = (state = {logged_in : false}, action) => {
  switch (action.type){
    case LOADED_ACCESS_TOKEN:
    case SAVED_ACCESS_TOKEN:
      return Object.assign({}, state, {
        logged_in: true,
        access_token: action.access_token
      });
    case INVALIDATE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        logged_in: false,
        access_token: null
      });
    default:
      return state;
  }
};