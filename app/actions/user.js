import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import DeviceInfo from 'react-native-device-info';
import branch from 'react-native-branch'
import qs from 'qs';
import { AdSupportIOS, AsyncStorage, PushNotificationIOS } from 'react-native';

export const getProfile = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/user/profile?access_token=' + access_token)
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(profileReceived(data)))
      .catch(err => dispatch(unexpectedError(err)));
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
      .catch(err => dispatch(unexpectedError(err)));
  };
};

export const COINS_RECEIVED = 'COINS_RECEIVED';
export const coinsReceived = (data) => {
  return {
    type: COINS_RECEIVED,
    ...data
  };
};

export const saveDeviceInfo = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    AdSupportIOS.getAdvertisingId(idfa => {
      let device_os = DeviceInfo.getSystemVersion(),
        device_kind = DeviceInfo.getModel();

      fetch(API_HOST + '/user/device?' + qs.stringify({ access_token, device_os, device_kind, idfa }), {method: 'POST'})
        .then(() => dispatch(savedDeviceInfo()))
        .catch(err => console.log(err));
    },
    unexpectedError);
  };
};

export const SAVED_DEVICE_INFO = 'SAVED_DEVICE_INFO';
export const savedDeviceInfo = () => {
  return {
    type: SAVED_DEVICE_INFO
  };
};

export const saveDeviceToken = (token) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/user/device_token?' + qs.stringify({ access_token, token }), {method: 'POST'})
      .then(() => dispatch(savedDeviceToken(token)))
      .catch(err => dispatch(unexpectedError(err)));
  };
};

export const SAVED_DEVICE_TOKEN = 'SAVED_DEVICE_TOKEN';
export const savedDeviceToken = (token) => {
  return {
    type: SAVED_DEVICE_INFO,
    token
  };
};

export const refreshDeviceToken = () => {
  return (dispatch) => {
    AsyncStorage.getItem('push_notifications_enabled')
      .then(enabled => {
        if (enabled === 'true'){
          PushNotificationIOS.requestPermissions({alert: true});
        }
      })
      .then(() => dispatch(refreshedDeviceToken()))
      .catch(err => dispatch(unexpectedError(err)));
  }
}

export const REFRESHED_DEVICE_TOKEN = 'REFRESHED_DEVICE_TOKEN';
export const refreshedDeviceToken = () => {
  return {
    type: REFRESHED_DEVICE_TOKEN
  };
};

export const loadReferralData = () => {
  return (dispatch) => {
    branch.getLatestReferringParams()
      .then(params => dispatch(sendReferralData(params)))
      .catch(err => console.log(err));
  };
};

export const sendReferralData = (data) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login,
      path = API_HOST + '/referral',
      opts = { ...data };

    if (!access_token){
      path += '/unauthenticated';
    } else {
      path += '/authenticated';
      opts.access_token = access_token;
    }

    fetch(path + '?' + qs.stringify(opts), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(sentReferralData(data)))
      .catch(err => console.log(err));
  };
};

export const SENT_REFERRAL_DATA = 'SENT_REFERRAL_DATA';
export const sentReferralData = (data) => {
  return {
    type: SENT_REFERRAL_DATA,
    ...data
  };
};