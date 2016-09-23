import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import { getCoins } from './user';
import qs from 'qs';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const loadImages = (last_media_id) => {
  return (dispatch, getState) => {
    dispatch(beginLoadingImages());

    fetch(API_HOST + '/images?' + qs.stringify({ last_media_id }))
      .then(response => response.json().catch(err => {}))
      .then(images => dispatch(loadedImages(images)))
      .catch(err => dispatch(unexpectedError(err)));
  };
};

export const BEGIN_LOADING_IMAGES = 'BEGIN_LOADING_IMAGES';
export const beginLoadingImages = () => {
  return {
    type: BEGIN_LOADING_IMAGES
  };
};

export const LOADED_IMAGES = 'LOADED_IMAGES';
export const loadedImages = (images) => {
  return {
    type: LOADED_IMAGES,
    images
  };
};

export const nextImage = () => {
  return (dispatch, getState) => {
    dispatch(beginLoadNextImage());

    fetch(API_HOST + '/image')
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(loadedNextImage(data)))
      .catch(err => dispatch(unexpectedError(err)));
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
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    dispatch(beginLikeImage());

    fetch(API_HOST + '/images/like?' + qs.stringify({access_token, media_id}), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(likedImage(data));
        dispatch(nextImage());
        dispatch(getCoins());
      })
      .catch(err => dispatch(unexpectedError(err)));
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
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    dispatch(beginSkipImage());

    fetch(API_HOST + '/images/skip?' + qs.stringify({access_token, media_id}), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(skippedImage(data)))
      .then(() => dispatch(nextImage()))
      .catch(err => dispatch(unexpectedError(err)));
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