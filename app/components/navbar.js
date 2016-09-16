import React, { Component } from 'react';
import { AppState, Image, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

import { getCoins } from '../actions/user';

import * as colors from '../styles/colors';

class CustomNavBar extends NavBar {
  renderLeftButton(){
    if (this.props.profileVisible){
      return (
        this.props.profile_image
        ? <Image
            source={{uri: this.props.profile_image}}
            style={styles.profileImage} />
        : null
      );
    } else {
      return super.renderLeftButton();
    }
  }

  renderRightButton(){
    return (
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>{this.props.coins}</Text>
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
        navigationBarStyle={styles.nav}
        titleStyle={styles.navTitle} />
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
    title: ownProps.title || state.navTitle,
    coins: state.user.coins,
    profile_image: state.user.profile.profile_picture
  };
};

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    left: 10,
    top: 7
  },
  nav: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.primaryDarker
  },
  navTitle: {
    color: 'white',
    fontWeight: '500'
  },
  coinText: {
    color: colors.coins,
    fontWeight: '500'
  },
  coinImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: 5
  },
  coinContainer: {
    position: 'absolute',
    right: 10,
    top: 30,
    flex: 1,
    flexDirection: 'row'
  }
})

export default connect(mapStateToProps)(NavBarLayout);