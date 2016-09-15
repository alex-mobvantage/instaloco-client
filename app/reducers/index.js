import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';
import { navTitle } from './nav';
import { user } from './user';
import { config } from './config';
import { products } from './purchase';
import { offer, offers } from './offers';
import { loading } from './loading';

const app = combineReducers({
  login,
  nextImage,
  images,
  navTitle,
  user,
  config,
  products,
  offer,
  offers,
  loading
});

export default app;