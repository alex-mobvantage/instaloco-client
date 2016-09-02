import { FETCHED_OFFER, FETCHED_OFFERS, BEGAN_OFFER } from '../actions/offers';

export const offers = (state = [], action) => {
  switch (action.type){
    case FETCHED_OFFERS:
      return action.offers;
    default:
      return state;
  }
};

export const offer = (state = {}, action) => {
  switch (action.type){
    case FETCHED_OFFER:
      return action.data;
    default:
      return state;
  }
};