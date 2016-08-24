import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

class CustomNavBar extends NavBar {
  renderRightButton(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
        <Text>{this.props.coins}</Text>
      </View>
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