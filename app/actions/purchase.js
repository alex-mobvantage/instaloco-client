import { request } from './api';
import { unexpectedError } from './error';
import { getCoins } from './user';
import { NativeModules } from 'react-native'
import { InAppUtils } from 'NativeModules'
import qs from 'qs';

export const loadProducts = () => {
  return (dispatch) => {
    dispatch(request({
      authenticated: false,
      path: '/products',
      success: data => dispatch(loadedProductIdentifiers(data))
    }));
  };
};

export const loadedProductIdentifiers = (ids) => {
  return (dispatch) => {
    InAppUtils.loadProducts(ids, (err, products) => {
      if (err){
        dispatch(unexpectedError(err));
        return;
      }

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
      if (error){
        dispatch(unexpectedError(error));
        return;
      }

      if (response && response.productIdentifier && response.transactionIdentifier){
        dispatch(transactionComplete(response.transactionIdentifier));
      }
    });
  }
};

const transactionComplete = (transactionIdentifier) => {
  return (dispatch, getState) => {
    dispatch(beginTransactionComplete());

    InAppUtils.receiptData((error, receiptData) => {
      dispatch(request({
        path: '/purchase?' + qs.stringify({ transactionIdentifier, receiptData }),
        options: {method: 'POST'},
        success: data => {
          dispatch(purchasedCoins(data));
          dispatch(getCoins());
        },
        failure: data => duspatch(purchaseCoins(data))
      }));
    });
  };
};

export const BEGIN_TRANSACTION_COMPLETE = 'BEGIN_TRANSACTION_COMPLETE';
export const beginTransactionComplete = () => {
  return {
    type: BEGIN_TRANSACTION_COMPLETE
  };
};

export const PURCHASED_COINS = 'PURCHASED_COINS';
export const purchasedCoins = (data) => {
  return {
    type: PURCHASED_COINS,
    ...data
  };
};