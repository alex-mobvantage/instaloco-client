import { request } from './api';
import { getCoins, getProfile } from './user';
import qs from 'qs';

export const purchaseFollowers = (followers) => {
  return (dispatch, getState) => {
    dispatch(beginPurchaseFollowers());
    dispatch(request({
      path: '/followers/get?' + qs.stringify({ followers }),
      options: {method: 'POST'},
      success: (data) => {
        dispatch(purchasedFollowers(data));
        dispatch(getCoins());
      },
      failure: data => dispatch(purchasedFollowers(data))
    }));
  };
};

export const BEGIN_PURCHASE_FOLLOWERS = 'BEGIN_PURCHASE_FOLLOWERS';
export const beginPurchaseFollowers = () => {
  return {
    type: BEGIN_PURCHASE_FOLLOWERS
  };
};

export const PURCHASED_FOLLOWERS = 'PURCHASED_FOLLOWERS';
export const purchasedFollowers = (data) => {
  return {
    type: PURCHASED_FOLLOWERS,
    ...data
  };
};

export const follow = (user_id) => {
  return (dispatch, getState) => {
    dispatch(beginFollow());
    dispatch(request({
      path: '/followers/follow?' + qs.stringify({ user_id }),
      options: {method: 'POST'},
      success: data => {
        dispatch(followed(data));
        dispatch(getCoins());
        dispatch(getProfile());
      },
      failure: data => dispatch(followed(data))
    }));
  };
};

export const BEGIN_FOLLOW = 'BEGIN_FOLLOW';
export const beginFollow = () => {
  return {
    type: BEGIN_FOLLOW
  };
};

export const FOLLOWED = 'FOLLOWED';
export const followed = (data) => {
  return {
    type: FOLLOWED,
    ...data
  };
};