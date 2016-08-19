import { AsyncStorage } from 'react-native';

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
  return (dispatch) => {
    AsyncStorage.setItem('access_token', token, (err) => {
      if (!err){
        dispatch(savedAccessToken(token));
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