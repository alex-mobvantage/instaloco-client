import { logout } from '../actions/auth';

export default accessTokenMiddleware = ({ dispatch }) => next => action => {
  if (action.error_type === 'UnauthorizedError'){
    dispatch(logout(true /* silent */));
  }

  return next(action);
};