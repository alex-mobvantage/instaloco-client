import { request } from './api';

export const loadConfig = () => {
  return (dispatch) => {
    dispatch(request({
      authenticated: false,
      path: '/config',
      success: data => dispatch(configReceived(data))
    }));
  };
};

export const CONFIG_RECEIVED = 'CONFIG_RECEIVED';
export const configReceived = (data) => {
  return {
    type: CONFIG_RECEIVED,
    config: data
  };
};