import { LOADED_PRODUCTS } from '../actions/purchase';

export const products = (state = [], action) => {
  switch (action.type){
    case LOADED_PRODUCTS:
      return action.products.sort(function(a, b){ return a.price - b.price });
    default:
      return state;
  }
};