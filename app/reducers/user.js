import { COINS_RECEIVED } from '../actions/user';

export const user = (state = {coins: 0}, action) => {
  switch (action.type){
    case COINS_RECEIVED:
      return Object.assign({}, state, {
        coins: action.coins
      });
    default:
      return state;
  }
};