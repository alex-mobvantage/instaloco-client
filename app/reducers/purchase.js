import { LOADED_PRODUCTS } from '../actions/purchase';

export const products = (state = [], action) => {
  switch (action.type){
    case LOADED_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};