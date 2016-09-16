import React, { Component } from 'react';
import { NetInfo, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { PushNotificationIOS } from 'react-native'

import { getProfile, getCoins, saveDeviceInfo, refreshDeviceToken, saveDeviceToken, loadReferralData } from '../actions/user';
import { changeNavTitle } from '../actions/nav';

import NavBar from './navbar';
import GetCoins from './getcoins';
import GetLikes from './getlikes';
import GetFollowers from './getfollowers';
import OfferWall from './offerwall';
import More from './more';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class MainViewLayout extends Component {
  state = {
    selectedTab: 'earnCoins'
  };

  componentDidMount(){
    PushNotificationIOS.addEventListener('register', this.onPushNotificationRegistration.bind(this));
    NetInfo.addEventListener('change', this.onNetworkStateChanged.bind(this));

    let { dispatch } = this.props;
    dispatch(getProfile());
    dispatch(getCoins());
    dispatch(saveDeviceInfo());
    dispatch(refreshDeviceToken());
    dispatch(loadReferralData());

    // TODO: Get this value automatically
    dispatch(changeNavTitle('Earn coins'));
  }

  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register', this.onPushNotificationRegistration.bind(this));
    NetInfo.removeEventListener('change', this.onNetworkStateChanged.bind(this));
  }

  render(){
    let { dispatch } = this.props;

    return (
      <TabBarIOS tintColor='black'>
        <TabBarIOS.Item
          title='Earn coins'
          selected={this.state.selectedTab === 'earnCoins'}
          onPress={() => {this.setState({selectedTab: 'earnCoins'}); dispatch(changeNavTitle('Earn coins')); }}>
          <GetCoins />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Get likes'
          selected={this.state.selectedTab === 'getLikes'}
          onPress={() => {this.setState({selectedTab: 'getLikes'}); dispatch(changeNavTitle('Get likes')); }}>
          <GetLikes />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Get followers'
          selected={this.state.selectedTab === 'getFollowers'}
          onPress={() => {this.setState({selectedTab: 'getFollowers'}); dispatch(changeNavTitle('Get followers')); }}>
          <GetFollowers />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Free coins'
          selected={this.state.selectedTab === 'freeCoins'}
          onPress={() => {this.setState({selectedTab: 'freeCoins'}); dispatch(changeNavTitle('Free coins')); }}>
          <OfferWall />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='More'
          selected={this.state.selectedTab === 'more'}
          onPress={() => {this.setState({selectedTab: 'more'}); dispatch(changeNavTitle('More')); }}>
          <More />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} profileVisible={true} />;
  }

  onPushNotificationRegistration(token){
    let { dispatch } = this.props;
    dispatch(saveDeviceToken(token));
  }

  onNetworkStateChanged(state){
    let { dispatch, online } = this.props;
    if (online){
      dispatch(getProfile());
      dispatch(getCoins());
      dispatch(saveDeviceInfo());
      dispatch(refreshDeviceToken());
    }
  }
};

const mapStateToProps = (state) => {
  return {
    offerwallEnabled: state.config.offerwall_enabled,
    online: state.network !== 'none' && state.network !== 'unknown'
  };
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    borderTopColor: colors.secondary,
    borderTopWidth: 1
  }
})

export default MainView = connect(mapStateToProps)(MainViewLayout);
