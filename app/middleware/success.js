import { Alert } from 'react-native';

export default successMiddleware = store => next => action => {
  if (action.success_message){
    Alert.alert('Success', action.success_message);
  }

  return next(action);
};