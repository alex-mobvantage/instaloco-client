import { BEGIN_PURCHASE_FOLLOWERS, PURCHASED_FOLLOWERS, BEGIN_FOLLOW, FOLLOWED } from '../actions/followers';

export const loading = (state, action) => {
  if (!state){
    state = {
      getFollowers: false,
      getCoins: false
    }
  }

  switch (action.type){
    case BEGIN_PURCHASE_FOLLOWERS:
      return Object.assign({}, state, {
        getFollowers: true
      });
    case PURCHASED_FOLLOWERS:
      return Object.assign({}, state, {
        getFollowers: false
      });
    case BEGIN_FOLLOW:
      return Object.assign({}, state, {
        getCoins: true
      });
    case FOLLOWED:
      return Object.assign({}, state, {
        getCoins: false
      });
    default:
      return state;
  }
};