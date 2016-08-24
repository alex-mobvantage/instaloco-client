import { LOADED_IMAGES, RECEIVED_NEXT_IMAGE } from '../actions/images';

export const images = (state = {images: [], canLoadMore: true}, action) => {
  switch (action.type){
    case LOADED_IMAGES:
      return Object.assign({}, state, {
        images: state.images.concat(action.images),
        canLoadMore: action.images.length === 20
      });
    default:
      return state;
  }
};

export const nextImage = (state = {}, action) => {
  switch (action.type){
    case RECEIVED_NEXT_IMAGE:
      return {
        image_url: action.image_url,
        media_id: action.media_id,
        can_follow: action.can_follow === true,
        user_id: action.user_id
      };
    default:
      return state;
  }
};