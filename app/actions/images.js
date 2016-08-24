import { API_HOST } from '../constants';
import qs from 'qs';
import _ from 'lodash';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const loadImages = (last_media_id) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/images?' + qs.stringify({ access_token, last_media_id }))
      .then(response => response.json())
      .then(images => dispatch(loadedImages(images)))
      .catch((err) => {
        console.log(err);
      });
  };
};

export const LOADED_IMAGES = 'LOADED_IMAGES';
export const loadedImages = (data) => {
  if (_.isArray(data)){
    return {
      type: LOADED_IMAGES,
      images: data
    };
  } else if (_.isObject(data)){
    return {
      type: LOADED_IMAGES,
      ...data
    };
  }
};

export const nextImage = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/image?' + qs.stringify({ access_token }))
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(receivedNextImage(data)))
      .catch(err => console.log(err));
  }
};

export const RECEIVED_NEXT_IMAGE = 'RECEIVED_NEXT_IMAGE';
export const receivedNextImage = (data) => {
  return {
    type: RECEIVED_NEXT_IMAGE,
    ...data
  };
};

export const likeImage = (media_id) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/images/like?' + qs.stringify({access_token, media_id}), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(likedImage(data)))
      .catch(err => console.log(err));
  }
};

export const LIKED_IMAGE = 'LIKED_IMAGE';
export const likedImage = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: LIKED_IMAGE,
      ...data
    });
    dispatch(nextImage());
  };
};

export const skipImage = (media_id) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/images/skip?' + qs.stringify({access_token, media_id}), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(skippedImage(data)))
      .catch(err => console.log(err));    
  }
};

export const SKIPPED_IMAGE = 'SKIPPED_IMAGE';
export const skippedImage = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: SKIPPED_IMAGE,
      ...data
    });
    dispatch(nextImage());
  };
};