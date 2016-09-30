import { Alert, Linking } from 'react-native';
import { unexpectedError } from '../actions/error';

export default errorMiddleware = store => next => action => {
  if (action.error){
    if (action.error_type === 'VerifyAccountError'){
      store.dispatch(verifyCheckpoint(action.error));
    } else {
      Alert.alert('Error', action.error);
    }
  }

  return next(action);
};

const verifyCheckpoint = (message) => {
  return (dispatch) => {
    Alert.alert(
      'Error',
      message,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Verify', onPress: () => {
          let deeplink = 'instagram://',
            weblink = 'https://www.instagram.com';

          Linking.canOpenURL(deeplink)
            .then(can => Linking.openURL(can ? deeplink : weblink))
            .catch(err => dispatch(unexpectedError(err)));
        }}
      ]
    );
  };
};