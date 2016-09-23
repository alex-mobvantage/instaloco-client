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
  return (dispatch, getState) => {
    let { multi_user } = getState().login;

    // If we have previously logged out this session,
    // refresh the new user's data
    if (multi_user){
      dispatch(getCoins());
      dispatch(getProfile());
      dispatch(loadImages());
    }

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
      dispatch(changeMainTab('earnCoins'));
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