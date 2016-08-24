import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';
import { navTitle } from './nav';
import { user } from './user';

const app = combineReducers({
  login,
  nextImage,
  images,
  navTitle,
  user
});

export default app;