import { Alert } from 'react-native';

export default errorMiddleware = store => next => action => {
  if (action.error){
    Alert.alert(null, action.error);
    return;
  }

  return next(action);
};