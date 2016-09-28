import { request } from './api';
import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import { getCoins } from './user';
import qs from 'qs';

export const loadImages = (last_media_id) => {
  return (dispatch) => {
    dispatch(beginLoadingImages());
    dispatch(request({
      path: '/images?' + qs.stringify({ last_media_id }),
      success: data => dispatch(loadedImages(data))
    }));
  };
};

export const BEGIN_LOADING_IMAGES = 'BEGIN_LOADING_IMAGES';
export const beginLoadingImages = () => {
  return {
    type: BEGIN_LOADING_IMAGES
  };
};

export const LOADED_IMAGES = 'LOADED_IMAGES';
export const loadedImages = (data) => {
  return {
    type: LOADED_IMAGES,
    ...data
  };
};

export const nextImage = () => {
  return (dispatch) => {
    dispatch(beginLoadNextImage());
    dispatch(request({
      path: '/image',
      success: data => dispatch(loadedNextImage(data))
    }));
  }
};

export const BEGIN_LOAD_NEXT_IMAGE = 'BEGIN_LOAD_NEXT_IMAGE';
export const beginLoadNextImage = () => {
  return {
    type: BEGIN_LOAD_NEXT_IMAGE
  };
};

export const LOADED_NEXT_IMAGE = 'LOADED_NEXT_IMAGE';
export const loadedNextImage = (data) => {
  return {
    type: LOADED_NEXT_IMAGE,
    ...data
  };
};

export const likeImage = (media_id) => {
  return (dispatch) => {
    dispatch(beginLikeImage());
    dispatch(request({
      path: '/images/like?' + qs.stringify({media_id}),
      options: {method: 'POST'},
      success: data => {
        dispatch(likedImage(data));
        dispatch(nextImage());
        dispatch(getCoins());
      },
      failure: data => dispatch(likedImage(data))
    }));
  }
};

export const BEGIN_LIKE_IMAGE = 'BEGIN_LIKE_IMAGE';
export const beginLikeImage = () => {
  return {
    type: BEGIN_LIKE_IMAGE
  };
};

export const LIKED_IMAGE = 'LIKED_IMAGE';
export const likedImage = (data) => {
  return {
    type: LIKED_IMAGE,
    ...data
  };
};

export const skipImage = (media_id) => {
  return (dispatch) => {
    dispatch(beginSkipImage());
    dispatch(request({
      path: '/images/skip?' + qs.stringify({media_id}),
      options: {method: 'POST'},
      success: data => {
        dispatch(skippedImage(data));
        dispatch(nextImage());
      },
      failure: data => dispatch(skippedImage(data))
    }));
  }
};

export const BEGIN_SKIP_IMAGE = 'BEGIN_SKIP_IMAGE';
export const beginSkipImage = () => {
  return {
    type: BEGIN_SKIP_IMAGE
  };
};

export const SKIPPED_IMAGE = 'SKIPPED_IMAGE';
export const skippedImage = (data) => {
  return {
    type: SKIPPED_IMAGE,
    ...data
  };
};