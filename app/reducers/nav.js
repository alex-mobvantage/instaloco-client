import { MAIN_TAB_CHANGE, NAV_TITLE_CHANGE } from '../actions/nav';
import { CONFIG_RECEIVED } from '../actions/config';

export const navTitle = (state = '', action) => {
  switch (action.type){
    case NAV_TITLE_CHANGE:
      return action.title;
    default:
      return state;
  }
};

export const mainTab = (state = 'earnCoins', action) => {
  switch (action.type){
    case MAIN_TAB_CHANGE:
      return action.key;
    default:
      return state;
  }
};