import { BEGIN_PURCHASE_FOLLOWERS, PURCHASED_FOLLOWERS } from '../actions/followers';

export const loading = (state, action) => {
  if (!state){
    state = {
      followers: false
    }
  }

  switch (action.type){
    case BEGIN_PURCHASE_FOLLOWERS:
      return Object.assign({}, state, {
        followers: true
      });
    case PURCHASED_FOLLOWERS:
      return Object.assign({}, state, {
        followers: false
      });
    default:
      return state;
  }
};