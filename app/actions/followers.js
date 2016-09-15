import { API_HOST } from '../constants';
import { unexpectedError } from '../utils';
import { getCoins } from './user';
import qs from 'qs';

export const purchaseFollowers = (followers) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/followers/get?' + qs.stringify({ access_token, followers }), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(purchasedFollowers(data));
        dispatch(getCoins());
      })
      .catch(unexpectedError);
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
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/followers/follow?' + qs.stringify({ access_token, user_id }), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        dispatch(followed(data));
        dispatch(getCoins());
      })
      .catch(unexpectedError);
  };
};

export const FOLLOWED = 'FOLLOWED';
export const followed = (data) => {
  return {
    type: FOLLOWED,
    ...data
  };
};