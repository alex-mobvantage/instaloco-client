import { LOADED_IMAGES, RECEIVED_NEXT_IMAGE } from '../actions/images';

export const images = (state = [], action) => {
  switch (action.type){
    case LOADED_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export const nextImage = (state = '', action) => {
  switch (action.type){
    case RECEIVED_NEXT_IMAGE:
      return action.image_url;
    default:
      return state;
  }
};