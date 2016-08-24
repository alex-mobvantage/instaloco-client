import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

class CustomNavBar extends NavBar {
  renderLeftButton(){
    if (this.props.profileVisible){
      return <Text style={{position: 'absolute', left: 10, top: 22}}>Profile</Text>;
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

const mapStateToProps = (state) => {
  return {
    title: state.navTitle,
    coins: state.user.coins
  };
};

export default connect(mapStateToProps)(NavBarLayout);