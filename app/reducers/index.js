import { combineReducers } from 'redux';
import { login } from './auth';

const app = combineReducers({
  login
});

export default app;