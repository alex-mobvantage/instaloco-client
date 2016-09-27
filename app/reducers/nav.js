import { MAIN_TAB_CHANGE } from '../actions/nav';
import { BEGIN_LOGIN_FROM_CACHED_CREDENTIALS, LOGGED_IN, LOGGED_OUT } from '../actions/auth';

export const nav = (state = {navTitle: '', mainTab: '', mainTabsDisabled: true}, action) => {
  switch (action.type){
    case MAIN_TAB_CHANGE:
      return Object.assign({}, state, {
        mainTab: action.key,
        navTitle: action.title
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        mainTab: '',
        navTitle: ''
      });
    case BEGIN_LOGIN_FROM_CACHED_CREDENTIALS:
      return Object.assign({}, state, {
        mainTabsDisabled: true
      });
    case LOGGED_IN:
      return Object.assign({}, state, {
        mainTabsDisabled: false
      });
    default:
      return state;
  }
}