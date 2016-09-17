import React, { Component } from 'react';
import { NetInfo, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <Icon.TabBarItemIOS
          title='Earn coins'
          iconName='picture-o'
          selectedIconName='picture-o'
          iconSize={20}
          selected={this.state.selectedTab === 'earnCoins'}
          onPress={() => {this.setState({selectedTab: 'earnCoins'}); dispatch(changeNavTitle('Earn coins')); }}>
          <GetCoins />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title='Get likes'
          iconName='heart'
          selectedIconName='heart'
          iconSize={20}
          selected={this.state.selectedTab === 'getLikes'}
          onPress={() => {this.setState({selectedTab: 'getLikes'}); dispatch(changeNavTitle('Get likes')); }}>
          <GetLikes />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title='Get followers'
          iconName='users'
          selectedIconName='users'
          iconSize={20}
          selected={this.state.selectedTab === 'getFollowers'}
          onPress={() => {this.setState({selectedTab: 'getFollowers'}); dispatch(changeNavTitle('Get followers')); }}>
          <GetFollowers />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title='Free coins'
          iconName='plus-circle'
          selectedIconName='plus-circle'
          iconSize={20}
          selected={this.state.selectedTab === 'freeCoins'}
          onPress={() => {this.setState({selectedTab: 'freeCoins'}); dispatch(changeNavTitle('Free coins')); }}>
          <OfferWall />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title='More'
          iconName='ellipsis-h'
          selectedIconName='ellipsis-h'
          iconSize={20}
          selected={this.state.selectedTab === 'more'}
          onPress={() => {this.setState({selectedTab: 'more'}); dispatch(changeNavTitle('More')); }}>
          <More />
        </Icon.TabBarItemIOS>
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
