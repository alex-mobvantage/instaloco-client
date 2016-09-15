import { Alert } from 'react-native';

let alerts = 0;
export const unexpectedError = err => {
  console.log(err);

  if (alerts === 0){
    Alert.alert(
      'Error', 
      'Something went wrong. Please try again later, or try restarting the app.',
      [
        {text: 'OK', onPress: () => { alerts--; }}
      ]);
  } 
};