import { request } from './api';
import qs from 'qs';

import { getCoins } from './user';

export const purchaseLikes = (media_id, image_url, likes) => {
  return (dispatch) => {
    dispatch(beginPurchaseLikes());
    dispatch(request({
      path: '/images/getlikes?' + qs.stringify({media_id, image_url, likes}),
      options: { method: 'POST' },
      success: data => {
        dispatch(purchasedLikes(data));
        dispatch(getCoins());
      },
      failure: data => dispatch(purchasedLikes(data))
    }));
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