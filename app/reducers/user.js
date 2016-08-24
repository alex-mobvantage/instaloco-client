import { COINS_RECEIVED, PROFILE_RECEIVED } from '../actions/user';

export const user = (state = {coins: 0, profile: {image_url: ''}}, action) => {
  switch (action.type){
    case COINS_RECEIVED:
      return Object.assign({}, state, {
        coins: action.coins
      });
    case PROFILE_RECEIVED:
      return Object.assign({}, state, {
        profile: {image_url: action.data.profile_picture}
      });
    default:
      return state;
  }
};