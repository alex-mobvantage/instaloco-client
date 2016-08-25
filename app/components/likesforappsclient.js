import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Scene, Router, Switch } from 'react-native-router-flux'

import app from '../reducers';
import accessTokenMiddleware from '../middleware/accesstoken';

import MainView from './mainview';
import Login from './login';
import PurchaseLikes from './purchaselikes';
import FAQ from './faq';
import Legal from './legal';

import { loadConfig } from '../actions/config';

let store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    accessTokenMiddleware
  )
);

store.dispatch(loadConfig());

class LikesForAppsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene
              key='auth'
              tabs={true}
              component={connect(mapStatesToSceneProps)(Switch)}
              selector={mapScenePropsToScene}>
              <Scene key='login' component={Login} />
              <Scene key='main' component={MainView} />
            </Scene>
            <Scene key='purchaseLikes' component={PurchaseLikes} />
            <Scene key='faq' component={FAQ} />
            <Scene key='legal' component={Legal} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const mapStatesToSceneProps = (state) => {
  return {
    logged_in: state.login.logged_in
  };
};

const mapScenePropsToScene = (props) => {
  return props.logged_in ? 'main' : 'login';
};

export default LikesForAppsClient;
