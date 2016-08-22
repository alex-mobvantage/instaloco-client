import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import { getProfile } from '../actions/user';

import GetCoins from './getcoins';
import GetLikes from './getlikes';
import GetFollowers from './getfollowers';
import OfferWall from './offerwall';
import More from './more';

const MainViewLayout = React.createClass({
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(getProfile());
  },

  render(){
    return (
      <ScrollableTabView tabBarPosition='bottom'>
        <GetCoins tabLabel='Earn coins' />
        <GetLikes tabLabel='Get likes' />
        <GetFollowers tabLabel='Get followers' />
        <OfferWall tabLabel='Free coins' />
        <More tabLabel='More' />
      </ScrollableTabView>
    );
  }
});

export default MainView = connect()(MainViewLayout);
