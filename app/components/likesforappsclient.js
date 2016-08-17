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

let store = createStore(app, applyMiddleware(thunkMiddleware, createLogger()));

class LikesForAppsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key='main' component={MainView} />
            <Scene key='second' component={
              () => (
                <View style={{flex: 1, backgroundColor: '#F5FCFF', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{textAlign: 'center', color: '#000000'}}>Second View</Text>
                </View>
              )} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default LikesForAppsClient;
