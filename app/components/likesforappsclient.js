import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Scene, Router, Switch } from 'react-native-router-flux'

import app from '../reducers';
import accessTokenMiddleware from '../middleware/accesstoken';
import errorMiddleware from '../middleware/error';

import MainView from './mainview';
import Login from './login';
import PurchaseLikes from './purchaselikes';
import FAQ from './faq';
import Legal from './legal';
import PurchaseCoins from './purchasecoins';
import OfferDetails from './offerdetails';

import { loadConfig } from '../actions/config';
import { loadProducts } from '../actions/purchase';
import { saveDeviceToken } from '../actions/user';

let store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    accessTokenMiddleware,
    errorMiddleware
  )
);

store.dispatch(loadConfig());
store.dispatch(loadProducts());

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
            <Scene key='purchaseCoins' component={PurchaseCoins} />
            <Scene key='faq' component={FAQ} />
            <Scene key='legal' component={Legal} />
            <Scene key='offerDetails' component={OfferDetails} />
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
