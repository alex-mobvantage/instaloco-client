import { COINS_RECEIVED, PROFILE_RECEIVED } from '../actions/user';
import { INVALIDATED_ACCESS_TOKEN } from '../actions/auth';

export const user = (state, action) => {
  let defaultState = {
    coins: 0,
    profile: {
      profile_picture: '',
      counts: {
        followed_by: 0,
        follows: 0
      }
    }
  };

  if (!state){
    state = defaultState;
  }

  switch (action.type){
    case COINS_RECEIVED:
      return Object.assign({}, state, {
        coins: action.coins
      });
    case PROFILE_RECEIVED:
      return Object.assign({}, state, {
        profile: action.data
      });
    case INVALIDATED_ACCESS_TOKEN:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
};