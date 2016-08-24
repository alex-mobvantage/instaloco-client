import { invalidateAccessToken } from '../actions/auth';

export default accessTokenMiddleware = ({ dispatch }) => next => action => {
  if (action.error === 'INVALID_ACCESS_TOKEN' ||
      action.error === 'EXPIRED_ACCESS_TOKEN'){
    dispatch(invalidateAccessToken());
    return;
  }

  return next(action);
};