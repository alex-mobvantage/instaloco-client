import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Actions, Scene, Router } from 'react-native-router-flux'

import app from '../reducers';

import MainView from './mainview';
import Login from './login';

let store = createStore(app, applyMiddleware(thunkMiddleware, createLogger()));

class LikesForAppsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key='login' component={Login} />
            <Scene key='main' component={MainView} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default LikesForAppsClient;
