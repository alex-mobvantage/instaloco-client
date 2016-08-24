import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import { getProfile } from '../actions/user';
import { changeNavTitle } from '../actions/nav';

import NavBar from './navbar';
import GetCoins from './getcoins';
import GetLikes from './getlikes';
import GetFollowers from './getfollowers';
import OfferWall from './offerwall';
import More from './more';

class MainViewLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(getProfile());

    // TODO: Get this value automatically
    dispatch(changeNavTitle('Earn coins'));
  }

  render(){
    return (
      <ScrollableTabView tabBarPosition='bottom' onChangeTab={this.onChangeTab.bind(this)}>
        <GetCoins tabLabel='Earn coins' />
        <GetLikes tabLabel='Get likes' />
        <GetFollowers tabLabel='Get followers' />
        <OfferWall tabLabel='Free coins' />
        <More tabLabel='More' />
      </ScrollableTabView>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} />;
  }

  onChangeTab(props){
    let { dispatch } = this.props;
    dispatch(changeNavTitle(props.ref.props.tabLabel));
  }
};

export default MainView = connect()(MainViewLayout);
