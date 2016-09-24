import { MAIN_TAB_CHANGE, NAV_TITLE_CHANGE } from '../actions/nav';
import { LOGGED_OUT } from '../actions/auth';

export const navTitle = (state = '', action) => {
  switch (action.type){
    case NAV_TITLE_CHANGE:
      return action.title;
    default:
      return state;
  }
};

export const mainTab = (state = '', action) => {
  switch (action.type){
    case MAIN_TAB_CHANGE:
      return action.key;
    case LOGGED_OUT:
      return '';
    default:
      return state;
  }
};