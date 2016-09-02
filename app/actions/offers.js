import { API_HOST } from '../constants';
import qs from 'qs';

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