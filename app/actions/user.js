import { request } from './api';
import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import DeviceInfo from 'react-native-device-info';
import branch from 'react-native-branch'
import qs from 'qs';
import { AdSupportIOS, AsyncStorage, PushNotificationIOS } from 'react-native';

export const getProfile = () => {
  return (dispatch) => {
    dispatch(request({
      path: '/user/profile',
      success: data => dispatch(profileReceived(data))
    }));
  };
};

export const PROFILE_RECEIVED = 'PROFILE_RECEIVED';
export const profileReceived = (profile) => {
  return {
    type: PROFILE_RECEIVED,
    profile
  };
};

export const getCoins = () => {
  return (dispatch) => {
    dispatch(request({
      path: '/user/coins',
      success: data => dispatch(coinsReceived(data))
    }));
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
    AdSupportIOS.getAdvertisingId(idfa => {
      let device_os = DeviceInfo.getSystemVersion(),
        device_kind = DeviceInfo.getModel();

      dispatch(request({
        path: '/user/device?' + qs.stringify({ device_os, device_kind, idfa }),
        options: {method: 'POST'},
        success: data => savedDeviceInfo(data)
      }))
    },
    err => dispatch(unexpectedError(err)));
  };
};

export const SAVED_DEVICE_INFO = 'SAVED_DEVICE_INFO';
export const savedDeviceInfo = (data) => {
  return {
    type: SAVED_DEVICE_INFO,
    ...data
  };
};

export const saveDeviceToken = (token) => {
  return (dispatch, getState) => {
    dispatch(request({
      path: '/user/device_token?' + qs.stringify({ token }),
      options: {method: 'POST'},
      success: data => dispatch(savedDeviceToken(data))
    }));
  };
};

export const SAVED_DEVICE_TOKEN = 'SAVED_DEVICE_TOKEN';
export const savedDeviceToken = (data) => {
  return {
    type: SAVED_DEVICE_TOKEN,
    ...data
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
    let { logged_in } = getState().login,
      path = '/referral/' + (logged_in ? 'authenticated' : 'unauthenticated');

    dispatch(request({
      authenticated: logged_in,
      path: path + '?' + qs.stringify({ ...data }),
      options: {method: 'POST'},
      success: data => dispatch(sentReferralData(data))
    }));
  };
};

export const SENT_REFERRAL_DATA = 'SENT_REFERRAL_DATA';
export const sentReferralData = (data) => {
  return {
    type: SENT_REFERRAL_DATA,
    ...data
  };
};