import { API_HOST } from '../constants';
import qs from 'qs';
import { Linking } from 'react-native';

export const fetchOffers = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/offers?' + qs.stringify({ access_token }))
      .then(response => response.json())
      .then(data => dispatch(fetchedOffers(data)))
      .catch(err => console.log(err));
  }
};

export const FETCHED_OFFERS = 'FETCHED_OFFERS';
export const fetchedOffers = (data) => {
  return {
    type: FETCHED_OFFERS,
    offers: data
  };
};

export const beginOffer = (offer_id, redirect_url) => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch(API_HOST + '/offers/begin?' + qs.stringify({ access_token, offer_id }), {method: 'POST'})
      .then(response => response.json().catch(err => {}))
      .then(data => {
        Linking.openURL(redirect_url);
        dispatch(beganOffer(data))
      })
      .catch(err => console.log(err));
  };
};

export const BEGAN_OFFER = 'BEGAN_OFFER';
export const beganOffer = (data) => {
  return {
    type: BEGAN_OFFER,
    ...data
  };
};