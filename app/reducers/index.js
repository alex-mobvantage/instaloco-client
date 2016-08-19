import { combineReducers } from 'redux';
import { login } from './auth';
import { images } from './images';

const app = combineReducers({
  login,
  images
});

export default app;