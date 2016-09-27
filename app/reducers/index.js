import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';
import { nav } from './nav';
import { user } from './user';
import { config } from './config';
import { products } from './purchase';
import { offer, offers } from './offers';
import { loading } from './loading';
import { network } from './network';

const app = combineReducers({
  login,
  nextImage,
  images,
  nav,
  user,
  config,
  products,
  offer,
  offers,
  loading,
  network
});

export default app;