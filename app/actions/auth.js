import { API_HOST } from '../constants';
import { getProfile, getCoins } from './user';
import { loadImages } from './images';
import { changeMainTab } from './nav';
import { Alert, AsyncStorage } from 'react-native';
import { unexpectedError } from './error';
import qs from 'qs';

export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const beginLogin = () => {
  return {
    type: BEGIN_LOGIN
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(beginLogin());

    fetch(API_HOST + '/auth?' + qs.stringify({ username, password }))
      .then(res => res.json().catch(err => {}))
      .then(data => dispatch(loggedIn(data)))
      .catch(err => dispatch(unexpectedError(err)));
  }
};

export const LOGGED_IN = 'LOGGED_IN';
export const loggedIn = (data) => {
  return {
    type: LOGGED_IN,
    ...data
  };
};

export const LOAD_ACCESS_TOKEN = 'LOAD_ACCESS_TOKEN';
export const loadAccessToken = () => {
  return (dispatch) => {
    AsyncStorage.getItem('access_token', function(err, token){
      if (token){
        dispatch(loadedAccessToken(token));
      }
    });
  }
};

export const LOADED_ACCESS_TOKEN = 'LOADED_ACCESS_TOKEN';
export const loadedAccessToken = (access_token) => {
  return {
    type: LOADED_ACCESS_TOKEN,
    access_token
  };
};

export const SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
export const saveAccessToken = (token) => {
  return (dispatch, getState) => {
    AsyncStorage.setItem('access_token', token, (err) => {
      if (!err){
        let { multi_user } = getState().login;
        dispatch(savedAccessToken(token));

        // If we have previously logged out this session,
        // refresh the new user's data
        if (multi_user){
          dispatch(getCoins());
          dispatch(getProfile());
          dispatch(loadImages());
        }
      }
    });
  };
};

export const SAVED_ACCESS_TOKEN = 'SAVED_ACCESS_TOKEN';
export const savedAccessToken = (access_token) => {
  return {
    type: SAVED_ACCESS_TOKEN,
    access_token
  }
};

export const logout = () => {
  return (dispatch) => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Yes', onPress: () => dispatch(invalidateAccessToken())},
        {text: 'Cancel'}
      ]);
  };
};

export const invalidateAccessToken = () => {
  return (dispatch) => {
    AsyncStorage.removeItem('access_token', (err) => {
      dispatch(invalidatedAccessToken());
      dispatch(changeMainTab('earnCoins'));
    });
  };
};

export const INVALIDATED_ACCESS_TOKEN = 'INVALIDATED_ACCESS_TOKEN';
export const invalidatedAccessToken = () => {
  return {
    type: INVALIDATED_ACCESS_TOKEN
  };
};