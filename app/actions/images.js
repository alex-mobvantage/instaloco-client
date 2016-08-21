import { API_HOST } from '../constants';
import qs from 'qs';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const loadImages = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login.access_token;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/images?' + qs.stringify({ access_token }))
      .then(response => response.json())
      .then(images => dispatch(loadedImages(images)))
      .catch((err) => {
        console.log(err);
      });
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