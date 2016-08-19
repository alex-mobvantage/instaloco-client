import { API_HOST } from '../constants';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const loadImages = () => {
  return (dispatch, getState) => {
    let token = getState().login.access_token;
    if (!token){
      return;
    }

    fetch(API_HOST + '/images?access_token=' + token)
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