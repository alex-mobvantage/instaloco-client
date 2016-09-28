import { logout } from '../actions/auth';

export default accessTokenMiddleware = ({ dispatch }) => next => action => {
  if (action.error === 'UNAUTHORIZED'){
    dispatch(logout(true /* silent */));
  }

  return next(action);
};