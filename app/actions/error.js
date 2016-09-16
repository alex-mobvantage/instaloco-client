import { Alert } from 'react-native';

export const UNEXPECTED_ERROR = 'UNEXPECTED_ERROR';
export const unexpectedError = err => {
  Alert.alert(
    'Error', 
    'Something went wrong. Please try again later, or try restarting the app.'
  );

  return {
    type: UNEXPECTED_ERROR
  };
};