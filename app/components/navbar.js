import React, { Component } from 'react';
import { AppState, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

import { getCoins } from '../actions/user';

class CustomNavBar extends NavBar {
  renderLeftButton(){
    if (this.props.profileVisible){
      return (
        this.props.profile_image
        ? <Image
            source={{uri: this.props.profile_image}}
            style={{width: 50, height: 50, left: 10, top: 10}} />
        : null
      );
    } else {
      return super.renderLeftButton();
    }
  }

  renderRightButton(){
    return (
      <Text style={{position: 'absolute', right: 10, top: 22}}>{this.props.coins}</Text>
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
        getTitle={() => this.props.title} />
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

export default connect(mapStateToProps)(NavBarLayout);