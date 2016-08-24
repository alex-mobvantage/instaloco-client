import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';
import { navTitle } from './nav';

const app = combineReducers({
  login,
  nextImage,
  images,
  navTitle
});

export default app;