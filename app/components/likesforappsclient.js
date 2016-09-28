import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Scene, Router, Switch } from 'react-native-router-flux'
import { NetInfo } from 'react-native';

import app from '../reducers';
import accessTokenMiddleware from '../middleware/accesstoken';
import errorMiddleware from '../middleware/error';
import successMiddleware from '../middleware/success';

import MainView from './mainview';
import Login from './login';
import PurchaseLikes from './purchaselikes';
import FAQ from './faq';
import Legal from './legal';
import PurchaseCoins from './purchasecoins';
import OfferDetails from './offerdetails';
import OfflineView from './offlineview';

import { loadConfig } from '../actions/config';
import { loadProducts } from '../actions/purchase';
import { saveDeviceToken, loadReferralData } from '../actions/user';
import { getNetworkState, networkStateUpdated } from '../actions/network';
import { loginFromCachedCredentials } from '../actions/auth';

let store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    accessTokenMiddleware,
    errorMiddleware,
    successMiddleware
  )
);

store.dispatch(loginFromCachedCredentials());
store.dispatch(loadConfig());
store.dispatch(loadProducts());
store.dispatch(loadReferralData());
store.dispatch(getNetworkState());

NetInfo.addEventListener(
  'change',
  (state) => {
    // If we're coming back online after being offline,
    // load up potentially missing pieces
    let appState = store.getState();
    if (appState.network === 'none' &&
        state !== 'none' &&
        state !== 'unknown'){

      store.dispatch(loadConfig());
      store.dispatch(loadProducts());
    }

    store.dispatch(networkStateUpdated(state));
  }
);

class LikesForAppsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene
            key='root'
            tabs={true}
            component={connect(mapNetworkStateToSceneProps)(Switch)}
            selector={mapSceneNetworkPropsToScene}>
            <Scene key='offline' component={OfflineView} />
            <Scene key='online'>
              <Scene
                key='auth'
                tabs={true}
                component={connect(mapAuthStatesToSceneProps)(Switch)}
                selector={mapSceneAuthPropsToScene}>
                <Scene key='unauthenticated' hideNavBar component={Login} />
                <Scene key='authenticated'>
                  <Scene key='main' initial component={MainView} />
                  <Scene key='purchaseLikes' component={PurchaseLikes} />
                  <Scene key='purchaseCoins' component={PurchaseCoins} />
                  <Scene key='faq' component={FAQ} />
                  <Scene key='legal' component={Legal} />
                  <Scene key='offerDetails' component={OfferDetails} />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const mapNetworkStateToSceneProps = (state) => {
  return {
    online: state.network !== 'none'
  };
};

const mapSceneNetworkPropsToScene = (props) => {
  return props.online ? 'online' : 'offline';
}

const mapAuthStatesToSceneProps = (state) => {
  return {
    logged_in: state.login.logged_in || state.login.cached_credentials
  };
};

const mapSceneAuthPropsToScene = (props) => {
  return props.logged_in ? 'authenticated' : 'unauthenticated';
};

export default LikesForAppsClient;
