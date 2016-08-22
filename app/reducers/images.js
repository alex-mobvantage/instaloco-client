import { LOADED_IMAGES, RECEIVED_NEXT_IMAGE } from '../actions/images';

export const images = (state = [], action) => {
  switch (action.type){
    case LOADED_IMAGES:
      return state.concat(action.images);
    default:
      return state;
  }
};

export const nextImage = (state = {}, action) => {
  switch (action.type){
    case RECEIVED_NEXT_IMAGE:
      return {
        image_url: action.image_url,
        media_id: action.media_id
      };
    default:
      return state;
  }
};