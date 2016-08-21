import { API_HOST } from '../constants';
import qs from 'qs';

export const purchaseLikes = (media_id, image_url, likes) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    fetch(
      API_HOST + '/images/getlikes?' + qs.stringify({access_token, media_id, image_url, likes}), 
      { method: 'POST' }
    )
    .then(response => response.json().catch(err => {}))
    .then(data => dispatch(purchasedLikes(data)))
    .catch(err => console.log(err));
  }
};

export const PURCHASED_LIKES = 'PURCHASED_LIKES';
export const purchasedLikes = (data) => {
  return {
    type: PURCHASED_LIKES,
    ...data
  };
};