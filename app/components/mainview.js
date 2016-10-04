import React from 'react';
import { NetInfo, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { PushNotificationIOS } from 'react-native';

import { getProfile, getCoins, saveDeviceInfo, refreshDeviceToken, saveDeviceToken, loadReferralData } from '../actions/user';
import { changeMainTab } from '../actions/nav';

import NavBar from './navbar';
import GetCoins from './getcoins';
import GetLikes from './getlikes';
import GetFollowers from './getfollowers';
import OfferWall from './offerwall';
import More from './more';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

const MainViewLayout = React.createClass({
  componentDidMount(){
    PushNotificationIOS.addEventListener('register', this.onPushNotificationRegistration);
    NetInfo.addEventListener('change', this.onNetworkStateChanged);
  },

  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register', this.onPushNotificationRegistration);
    NetInfo.removeEventListener('change', this.onNetworkStateChanged);
  },

  render(){
    let { dispatch, activeTab, tabsDisabled, offerwallEnabled } = this.props;
    let tabs = [
      {id: 'earnCoins', title: 'Earn coins', icon: 'picture-o', cmp: <GetCoins />},
      {id: 'getLikes', title: 'Get likes', icon: 'heart', cmp: <GetLikes />},
      {id: 'getFollowers', title: 'Get followers', icon: 'users', cmp: <GetFollowers />},
      {id: 'freeCoins', title: 'Free coins', icon: 'plus-circle', cmp: <OfferWall />},
      {id: 'more', title: 'More', icon: 'ellipsis-h', cmp: <More />}
    ];

    if (!offerwallEnabled){
      tabs.splice(3, 1);
    }

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
                if (tabsDisabled){
                  return;
                }

                dispatch(changeMainTab(tab.id, tab.title));
              }}>
              {tab.cmp}
            </Icon.TabBarItemIOS>
          ))
        }
      </TabBarIOS>
    );
  },

  onPushNotificationRegistration(token){
    let { dispatch } = this.props;
    dispatch(saveDeviceToken(token));
  },

  onNetworkStateChanged(state){
    let { dispatch, online } = this.props;
    if (online){
      dispatch(getProfile());
      dispatch(getCoins());
      dispatch(saveDeviceInfo());
      dispatch(refreshDeviceToken());
    }
  },

  statics: {
    renderNavigationBar(navProps){
      return <NavBar {...navProps} profileVisible={true} />;
    }
  }
});

const mapStateToProps = (state) => {
  return {
    offerwallEnabled: state.config.offerwall_enabled,
    online: state.network !== 'none' && state.network !== 'unknown',
    activeTab: state.nav.mainTab,
    tabsDisabled: state.nav.mainTabsDisabled
  };
};

export default MainView = connect(mapStateToProps)(MainViewLayout);
