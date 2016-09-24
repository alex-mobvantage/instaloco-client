import { API_HOST } from '../constants';
import { getProfile, getCoins } from './user';
import { changeMainTab } from './nav';
import { Alert, AsyncStorage } from 'react-native';
import { unexpectedError } from './error';
import qs from 'qs';
import Promise from 'bluebird';

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
      .then(() => {
        return Promise.all([
          AsyncStorage.setItem('username', username),
          AsyncStorage.setItem('password', password)
        ])
        .catch(err => console.log('error saving credentials', err));
      })
      .catch(err => dispatch(unexpectedError(err)));
  }
};

export const loginFromCachedCredentials = () => {
  return (dispatch) => {
    Promise.all([
      AsyncStorage.getItem('username'),
      AsyncStorage.getItem('password')
    ])
    .spread((username, password) => {
      if (username && password){
        dispatch(changeMainTab('earnCoins'));
        dispatch(beginLoginFromCachedCredentials());
        dispatch(login(username, password));
      }
    });
  };
};

export const BEGIN_LOGIN_FROM_CACHED_CREDENTIALS = 'BEGIN_LOGIN_FROM_CACHED_CREDENTIALS';
export const beginLoginFromCachedCredentials = () => {
  return {
    type: BEGIN_LOGIN_FROM_CACHED_CREDENTIALS
  };
};

export const LOGGED_IN = 'LOGGED_IN';
export const loggedIn = (data) => {
  return (dispatch, getState) => {
    dispatch(changeMainTab('earnCoins'));
    dispatch(getCoins());
    dispatch(getProfile());

    dispatch({
      type: LOGGED_IN,
      ...data
    });
  };
};

export const logout = (silent) => {
  return (dispatch) => {
    let logoutAction = () => {
      dispatch(loggedOut());
      AsyncStorage.multiRemove(['username', 'password']);
    }

    if (silent){
      logoutAction();
    } else {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {text: 'Yes', onPress: logoutAction},
          {text: 'Cancel'}
        ]);
    }
  };
};

export const LOGGED_OUT = 'LOGGED_OUT';
export const loggedOut = () => {
  return {
    type: LOGGED_OUT
  };
};