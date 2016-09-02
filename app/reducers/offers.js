import { FETCHED_OFFERS } from '../actions/offers';

export const offers = (state = [], action) => {
  switch (action.type){
    case FETCHED_OFFERS:
      return action.offers;
    default:
      return state;
  }
};