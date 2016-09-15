import { API_HOST } from '../constants';
import { unexpectedError } from '../utils';

export const loadConfig = () => {
  return (dispatch) => {
    fetch(API_HOST + '/config')
      .then(response => response.json())
      .then(data => dispatch(configReceived(data)))
      .catch(unexpectedError);
  };
};

export const CONFIG_RECEIVED = 'CONFIG_RECEIVED';
export const configReceived = (data) => {
  return {
    type: CONFIG_RECEIVED,
    config: data
  };
};