import { combineReducers } from 'redux';
import { login } from './auth';
import { nextImage, images } from './images';

const app = combineReducers({
  login,
  nextImage,
  images
});

export default app;