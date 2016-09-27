import React, { Component } from 'react';
import { AppState, Image, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

import { getCoins } from '../actions/user';

import * as colors from '../styles/colors';
import { fonts } from '../styles/common';

class CustomNavBar extends NavBar {
  renderLeftButton(){
    if (this.props.profileVisible){
      return (
        <Image
          source={this.props.profile_image ? {uri: this.props.profile_image} : require('../resources/defaultprofile.jpg')}
          style={styles.profileImage} />
      );
    } else {
      return super.renderLeftButton();
    }
  }

  renderRightButton(){
    return (
      <View style={styles.coinContainer}>
        <Text style={[fonts.base, fonts.bold, styles.coinText]}>{this.props.coins}</Text>
        <Image source={require('../resources/coins.png')} style={styles.coinImage} />
      </View>
    );
  }
}

class NavBarLayout extends Component {
  componentDidMount(){
    AppState.addEventListener('change', this.onAppStateChange.bind(this));
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.onAppStateChange.bind(this));
  }

  render(){
    return (
      <CustomNavBar 
        {...this.props}
        getTitle={() => this.props.title}
        navigationBarStyle={[styles.nav]}
        titleStyle={[fonts.base, fonts.bold]} />
    );
  }

  onAppStateChange(currentState){
    if (currentState === 'active'){
      let { dispatch } = this.props;
      dispatch(getCoins());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title || state.nav.navTitle,
    coins: state.user.coins,
    profile_image: state.user.profile.picture
  };
};

const styles = StyleSheet.create({
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    left: 12,
    top: 20
  },
  nav: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.primaryDarker
  },
  coinText: {
    color: colors.coins
  },
  coinImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: 5
  },
  coinContainer: {
    position: 'absolute',
    right: 12,
    top: 34,
    flex: 1,
    flexDirection: 'row'
  }
})

export default connect(mapStateToProps)(NavBarLayout);