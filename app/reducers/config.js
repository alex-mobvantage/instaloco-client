import { CONFIG_RECEIVED } from '../actions/config';

export const config = (state = {}, action) => {
  switch (action.type){
    case CONFIG_RECEIVED:
      return action.config;
    default:
      return state;
  }
};