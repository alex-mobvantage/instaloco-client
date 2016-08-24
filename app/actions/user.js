import { API_HOST } from '../constants';

export const getProfile = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/user/profile?access_token=' + access_token)
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(profileReceived(data)))
      .catch(err => console.log(err));
  };
};

export const PROFILE_RECEIVED = 'PROFILE_RECEIVED';
export const profileReceived = (data) => {
  return {
    type: PROFILE_RECEIVED,
    ...data
  };
};

export const getCoins = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/user/coins?access_token=' + access_token)
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(coinsReceived(data)))
      .catch(err => console.log(err));
  };
};

export const COINS_RECEIVED = 'COINS_RECEIVED';
export const coinsReceived = (data) => {
  return {
    type: COINS_RECEIVED,
    ...data
  };
};