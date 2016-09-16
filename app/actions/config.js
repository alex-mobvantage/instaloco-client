import { API_HOST } from '../constants';
import { unexpectedError } from './error';

export const loadConfig = () => {
  return (dispatch) => {
    fetch(API_HOST + '/config')
      .then(response => response.json())
      .then(data => dispatch(configReceived(data)))
      .catch(err => dispatch(unexpectedError(err)));
  };
};

export const CONFIG_RECEIVED = 'CONFIG_RECEIVED';
export const configReceived = (data) => {
  return {
    type: CONFIG_RECEIVED,
    config: data
  };
};