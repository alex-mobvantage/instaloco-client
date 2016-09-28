import { Alert } from 'react-native';

export default errorMiddleware = store => next => action => {
  if (action.error && action.error !== 'UNAUTHORIZED'){
    Alert.alert('Error', action.error);
  }

  return next(action);
};