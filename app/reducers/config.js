import { CONFIG_RECEIVED } from '../actions/config';

export const config = (state = {coins_per_like: 2, coins_per_follower: 10}, action) => {
  switch (action.type){
    case CONFIG_RECEIVED:
      return action.config;
    default:
      return state;
  }
};