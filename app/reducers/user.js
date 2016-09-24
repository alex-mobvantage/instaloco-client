import { COINS_RECEIVED, PROFILE_RECEIVED } from '../actions/user';
import { LOGGED_OUT } from '../actions/auth';

export const user = (state, action) => {
  let defaultState = {
    coins: 0,
    profile: {
      picture: '',
      followingsCount: 0,
      followersCount: 0
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
        profile: action.profile || defaultState.profile
      });
    case LOGGED_OUT:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
};