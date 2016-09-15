import { COINS_RECEIVED, PROFILE_RECEIVED } from '../actions/user';

export const user = (state = {
    coins: 0,
    profile: {
      profile_picture: '',
      counts: {
        followed_by: 0,
        following: 0
      }
    }
}, 
action) => {
  switch (action.type){
    case COINS_RECEIVED:
      return Object.assign({}, state, {
        coins: action.coins
      });
    case PROFILE_RECEIVED:
      return Object.assign({}, state, {
        profile: action.data
      });
    default:
      return state;
  }
};