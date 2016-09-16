import { NETWORK_STATE_UPDATED } from '../actions/network';

export const network = (state = 'wifi', action) => {
  switch (action.type){
    case NETWORK_STATE_UPDATED:
      return action.state;
    default:
      return state;
  }
};