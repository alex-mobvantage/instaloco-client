import React, { Component } from 'react';
import { NetInfo, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { PushNotificationIOS } from 'react-native';

import { getProfile, getCoins, saveDeviceInfo, refreshDeviceToken, saveDeviceToken, loadReferralData } from '../actions/user';
import { changeMainTab, changeNavTitle } from '../actions/nav';

import NavBar from './navbar';
import GetCoins from './getcoins';
import GetLikes from './getlikes';
import GetFollowers from './getfollowers';
import OfferWall from './offerwall';
import More from './more';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class MainViewLayout extends Component {
  componentDidMount(){
    PushNotificationIOS.addEventListener('register', this.onPushNotificationRegistration.bind(this));
    NetInfo.addEventListener('change', this.onNetworkStateChanged.bind(this));

    let { dispatch } = this.props;
    dispatch(getProfile());
    dispatch(getCoins());
    dispatch(saveDeviceInfo());
    dispatch(refreshDeviceToken());
    dispatch(loadReferralData());
  }

  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register', this.onPushNotificationRegistration.bind(this));
    NetInfo.removeEventListener('change', this.onNetworkStateChanged.bind(this));
  }

  render(){
    let { dispatch, activeTab } = this.props;
    let tabs = [
      {id: 'earnCoins', title: 'Earn coins', icon: 'picture-o', cmp: <GetCoins />},
      {id: 'getLikes', title: 'Get likes', icon: 'heart', cmp: <GetLikes />},
      {id: 'getFollowers', title: 'Get followers', icon: 'users', cmp: <GetFollowers />},
      {id: 'freeCoins', title: 'Free coins', icon: 'plus-circle', cmp: <OfferWall />},
      {id: 'more', title: 'More', icon: 'ellipsis-h', cmp: <More />}
    ];

    return (
      <TabBarIOS tintColor='black' removeClippedSubviews>
        {
          tabs.map(tab => (
            <Icon.TabBarItemIOS
              key={'tab-' + tab.id}
              title={tab.title}
              iconName={tab.icon}
              selectedIconName={tab.icon}
              iconSize={20}
              selected={tab.id === activeTab}
              onPress={() => {
                dispatch(changeMainTab(tab.id));
                dispatch(changeNavTitle(tab.title));
              }}>
              {tab.cmp}
            </Icon.TabBarItemIOS>
          ))
        }
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
    online: state.network !== 'none' && state.network !== 'unknown',
    activeTab: state.mainTab
  };
};

export default MainView = connect(mapStateToProps)(MainViewLayout);
