import { combineReducers } from 'redux';

const dummy = (state = [], action) => {
  return state;
};

const app = combineReducers({
  dummy
});

export default app;