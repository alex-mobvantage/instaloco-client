import { getProfile, getCoins } from './user';
import { loadImages } from './images';
import { changeMainTab } from './nav';
import { Alert, AsyncStorage } from 'react-native';

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