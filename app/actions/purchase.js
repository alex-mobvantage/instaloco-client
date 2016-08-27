import { API_HOST } from '../constants';
import { loadCoins } from './user';
import { NativeModules } from 'react-native'
import { InAppUtils } from 'NativeModules'
import qs from 'qs';

export const loadProducts = () => {
  return (dispatch) => {
    fetch(API_HOST + '/products')
      .then(response => response.json())
      .then(data => dispatch(loadedProductIdentifiers(data)))
      .catch(err => console.log(err));
  };
};

export const loadedProductIdentifiers = (ids) => {
  return (dispatch) => {
    InAppUtils.loadProducts(ids, (err, products) => {
      dispatch(loadedProducts(products));
    });
  };
};

export const LOADED_PRODUCTS = 'LOADED_PRODUCTS';
export const loadedProducts = (data) => {
  return {
    type: LOADED_PRODUCTS,
    products: data
  };
};

export const purchaseCoins = (identifier) => {
  return (dispatch) => {
    InAppUtils.purchaseProduct(identifier, (error, response) => {
      console.log(error, response);

      if (response && response.productIdentifier && response.transactionIdentifier){
        dispatch(transactionComplete(response.transactionIdentifier));
      }
    });
  }
};

const transactionComplete = (transactionIdentifier) => {
  return (dispatch) => {
    InAppUtils.receiptData((error, receiptData) => {
      fetch(API_HOST + '/purchase?' + qs.stringify({ transactionIdentifier, receiptData }))
        .then(response => response.json().catch(err => {}))
        .then(data => {
          dispatch(purchasedCoins(data));
          dispatch(loadCoins());
        })
        .catch(err => console.log(err));
    });
  };
};

export const PURCHASED_COINS = 'PURCHASED_COINS';
export const purchasedCoins = (data) => {
  return {
    type: PURCHASED_COINS,
    ...data
  };
};