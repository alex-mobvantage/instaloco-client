import { API_HOST } from '../constants';
import { unexpectedError } from './error';
import qs from 'qs';
import { Alert, AsyncStorage, Linking, PushNotificationIOS } from 'react-native';
import Promise from 'bluebird';

export const fetchOffers = () => {
  return (dispatch, getState) => {
    dispatch(beginFetchOffers());

    fetch(API_HOST + '/offers')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchedOffers(data));
        dispatch(showOfferWallTutorial());
      })
      .catch(err => dispatch(unexpectedError(err)));
  }
};

export const BEGIN_FETCH_OFFERS = 'BEGIN_FETCH_OFFERS';
export const beginFetchOffers = () => {
  return {
    type: BEGIN_FETCH_OFFERS
  };
};

export const FETCHED_OFFERS = 'FETCHED_OFFERS';
export const fetchedOffers = (data) => {
  return {
    type: FETCHED_OFFERS,
    offers: data
  };
};

export const fetchOffer = (id) => {
  return (dispatch, getState) => {
    fetch(API_HOST + '/offer/' + id)
      .then(response => response.json().catch(err => {}))
      .then(data => dispatch(fetchedOffer(data)))
      .catch(err => dispatch(unexpectedError(err)));
  }
}

export const FETCHED_OFFER = 'FETCHED_OFFER';
export const fetchedOffer = (data) => {
  return {
    type: FETCHED_OFFER,
    data
  };
};

export const beginOffer = (offer_id, redirect_url) => {
  return (dispatch, getState) => {
    requestPushPermissions()
      .then(() => dispatch(startBeginOffer()))
      .then(() => fetch(API_HOST + '/offers/begin?' + qs.stringify({ offer_id }), {method: 'POST'}))
      .then(response => response.json().catch(err => {}))
      .then(data => {
        Linking.openURL(redirect_url);
        dispatch(fetchOffer(offer_id));
        dispatch(beganOffer(data));
      })
      .catch(err => dispatch(unexpectedError(err)));
  };
};

const requestPushPermissions = () => {
  return AsyncStorage.getItem('push_notifications_requested')
    .then(requested => {
      if (requested === null){
        return new Promise((success, error) => {
          Alert.alert(
            null,
            'Some offers may take a lil\' while to complete. Would you like us to notify you when your coins have arrived?',
            [
              {text: 'OK', onPress: () => success(true)},
              {text: 'No thanks', onPress: () => success(false)}
            ]
          )
        })
        .then(permission => {
          if (permission){
            PushNotificationIOS.requestPermissions({alert: true})

            return Promise.delay(5 * 1000)
              .then(() => new Promise((success) => PushNotificationIOS.checkPermissions(success)))
              .then(permissions => {
                if (permissions.alert){
                  return AsyncStorage.setItem('push_notifications_enabled', 'true');
                } else {
                  return AsyncStorage.setItem('push_notifications_enabled', 'false');
                }
              })
          } else {
            return AsyncStorage.setItem('push_notifications_enabled', 'false');
          }
        })
        .then(() => AsyncStorage.setItem('push_notifications_requested', 'true'))
        .catch(err => console.log('error requesting permissions', err));
      }
    });
};

export const BEGIN_OFFER_START = 'BEGIN_OFFER_START';
export const startBeginOffer = () => {
  return {
    type: BEGIN_OFFER_START
  };
};

export const BEGAN_OFFER = 'BEGAN_OFFER';
export const beganOffer = (data) => {
  return {
    type: BEGAN_OFFER,
    ...data
  };
};

export const showOfferWallTutorial = () => {
  return () => {
    AsyncStorage.getItem('offerwall_tutorial_shown')
      .then((shown) => {
        if (!shown){
          Alert.alert(
            'Info',
            'Download and test the following apps to earn free coins!',
            [
              {text: 'Got it', onPress: () => AsyncStorage.setItem('offerwall_tutorial_shown', 'true')}
            ]);
        }
      });
  };
};