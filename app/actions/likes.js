import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import qs from 'qs';

import { getCoins } from './user';

export const purchaseLikes = (media_id, image_url, likes) => {
  return (dispatch, getState) => {
    dispatch(beginPurchaseLikes());

    fetch(API_HOST + '/images/getlikes?' + qs.stringify({media_id, image_url, likes}), { method: 'POST' })
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(purchasedLikes(data));
        dispatch(getCoins());
      })
      .catch(err => dispatch(unexpectedError(err)));
  }
};

export const BEGIN_PURCHASE_LIKES = 'BEGIN_PURCHASE_LIKES';
export const beginPurchaseLikes = () => {
  return {
    type: BEGIN_PURCHASE_LIKES
  };
};

export const PURCHASED_LIKES = 'PURCHASED_LIKES';
export const purchasedLikes = (data) => {
  return {
    type: PURCHASED_LIKES,
    ...data
  };
};