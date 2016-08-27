import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';
import { navTitle } from './nav';
import { user } from './user';
import { config } from './config';
import { products } from './purchase';

const app = combineReducers({
  login,
  nextImage,
  images,
  navTitle,
  user,
  config,
  products
});

export default app;