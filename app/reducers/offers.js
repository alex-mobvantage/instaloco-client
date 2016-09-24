import { FETCHED_OFFER, FETCHED_OFFERS, BEGAN_OFFER } from '../actions/offers';
import { LOGGED_OUT } from '../actions/auth';

export const offers = (state = [], action) => {
  switch (action.type){
    case FETCHED_OFFERS:
      return action.offers;
    case LOGGED_OUT:
      return [];
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