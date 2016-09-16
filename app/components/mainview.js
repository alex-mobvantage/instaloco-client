import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
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

class MainViewLayout extends Component {
  componentDidMount(){
    PushNotificationIOS.addEventListener('register', this.onPushNotificationRegistration.bind(this));

    let { dispatch } = this.props;
    dispatch(getProfile());
    dispatch(getCoins());
    dispatch(saveDeviceInfo());
    dispatch(refreshDeviceToken());
    dispatch(loadReferralData());

    // TODO: Get this value automatically
    dispatch(changeNavTitle('Earn coins'));
  }

  render(){
    return (
      <ScrollableTabView tabBarPosition='bottom' onChangeTab={this.onChangeTab.bind(this)}>
        <GetCoins tabLabel='Earn coins' />
        <GetLikes tabLabel='Get likes' />
        <GetFollowers tabLabel='Get followers' />
        {this.props.offerwallEnabled && <OfferWall tabLabel='Free coins' />}
        <More tabLabel='More' />
      </ScrollableTabView>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} profileVisible={true} />;
  }

  onChangeTab(props){
    let { dispatch } = this.props;
    dispatch(changeNavTitle(props.ref.props.tabLabel));
  }

  onPushNotificationRegistration(token){
    let { dispatch } = this.props;
    dispatch(saveDeviceToken(token));
  }
};

const mapStateToProps = (state) => {
  return {
    offerwallEnabled: state.config.offerwall_enabled
  };
};

export default MainView = connect(mapStateToProps)(MainViewLayout);
