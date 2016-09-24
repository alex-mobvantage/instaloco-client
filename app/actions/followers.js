import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import { getCoins, getProfile } from './user';
import qs from 'qs';

export const purchaseFollowers = (followers) => {
  return (dispatch, getState) => {
    dispatch(beginPurchaseFollowers());

    fetch(API_HOST + '/followers/get?' + qs.stringify({ followers }), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(purchasedFollowers(data));
        dispatch(getCoins());
      })
      .catch((err) => dispatch(unexpectedError(err)));
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

    fetch(API_HOST + '/followers/follow?' + qs.stringify({ user_id }), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(followed(data));
        dispatch(getCoins());
        dispatch(getProfile());
      })
      .catch(err => dispatch(unexpectedError(err)));
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