import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

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
  render(){
    return (
      <CustomNavBar 
        {...this.props}
        getTitle={() => this.props.title} />
    );
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