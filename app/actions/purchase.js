import { API_HOST } from '../constants';
import { NativeModules } from 'react-native'
import { InAppUtils } from 'NativeModules'

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