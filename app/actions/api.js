import { API_HOST } from '../constants';
import { unexpectedError } from './error';

export const request = (opts) => {
  return (dispatch, getState) => {
    if (opts.authenticated == null){
      opts.authenticated = true;
    }

    dispatch({
      type: 'API_REQUEST',
      ...opts
    });

    if (opts.authenticated){
      let { logged_in } = getState().login;
      if (!logged_in){
        return;
      }
    }

    fetch(API_HOST + opts.path, opts.options)
      .then(res => res.json().catch(err => {}).then(data => {
        if (res.ok){
          if (opts.success){
            opts.success(data);
          }
        } else {
          if (opts.failure){
            opts.failure(data);
          }
        }
      }))
      .catch(err => dispatch(unexpectedError(err)));
  };
};