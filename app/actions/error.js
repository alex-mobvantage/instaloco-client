import { Alert } from 'react-native';

export const UNEXPECTED_ERROR = 'UNEXPECTED_ERROR';
export const unexpectedError = err => {
  return (dispatch, getState) => {
    console.error(err);
    
    let { network } = getState();
    if (network !== 'unknown' && network !== 'none'){
      Alert.alert(
        'Error',
        'Something went wrong. Please try again later, or try restarting the app.'
      );
    }

    dispatch({
      type: UNEXPECTED_ERROR
    });
  };
};