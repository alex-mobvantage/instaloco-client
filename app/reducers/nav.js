import { NAV_TITLE_CHANGE } from '../actions/nav';

export const navTitle = (state = '', action) => {
  switch (action.type){
    case NAV_TITLE_CHANGE:
      return action.title;
    default:
      return state;
  }
};