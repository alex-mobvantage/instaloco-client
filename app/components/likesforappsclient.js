import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Scene, Router } from 'react-native-router-flux'

import app from '../reducers';

import MainView from './mainview';
import Login from './login';
import PurchaseLikes from './purchaselikes';

let store = createStore(app, applyMiddleware(thunkMiddleware, createLogger()));

class LikesForAppsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key='login' component={Login} />
            <Scene key='main' component={MainView} />
            <Scene key='purchaseLikes' component={PurchaseLikes} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default LikesForAppsClient;
