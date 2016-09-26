import { LOADED_IMAGES, LOADED_NEXT_IMAGE } from '../actions/images';
import { FOLLOWED } from '../actions/followers';
import { LOGGED_OUT } from '../actions/auth';
import _ from 'lodash';

export const images = (state = {images: [], canLoadMore: true}, action) => {
  switch (action.type){
    case LOADED_IMAGES:
      return Object.assign({}, state, {
        images: _.uniqBy(
          state.images.concat(
            action.images
              .map(image => _.pick(image, ['id', 'likeCount', 'images']))
              .map(image => { return {
                id: image.id,
                likeCount: image.likeCount,
                thumbnail: _.minBy(image.images, img => img.width).url,
                fullsize: _.maxBy(image.images, img => img.width).url
              }})
          ),
          image => image.id
        ),
        canLoadMore: action.canLoadMore
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        images: [],
        canLoadMore: true
      });
    default:
      return state;
  }
};

export const nextImage = (state = {}, action) => {
  switch (action.type){
    case LOADED_NEXT_IMAGE:
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
    case LOGGED_OUT:
      return {};
    default:
      return state;
  }
};