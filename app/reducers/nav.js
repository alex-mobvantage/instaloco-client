import { NAV_TITLE_CHANGE } from '../actions/nav';
import { CONFIG_RECEIVED } from '../actions/config';

export const navTitle = (state = '', action) => {
  switch (action.type){
    case NAV_TITLE_CHANGE:
      return action.title;
    default:
      return state;
  }
};