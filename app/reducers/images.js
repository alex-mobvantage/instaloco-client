import { LOADED_IMAGES } from '../actions/images';

export const images = (state = [], action) => {
  switch (action.type){
    case LOADED_IMAGES:
      return action.images;
    default:
      return state;
  }
};