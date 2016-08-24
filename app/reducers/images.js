import { LOADED_IMAGES, RECEIVED_NEXT_IMAGE } from '../actions/images';
import { FOLLOWED } from '../actions/followers';

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
      return Object.assign({}, state, {
        image_url: action.image_url,
        media_id: action.media_id,
        can_follow: action.can_follow === true,
        user_id: action.user_id
      });
    case FOLLOWED:
      return Object.assign({}, state, {
        can_follow: false
      });
    default:
      return state;
  }
};