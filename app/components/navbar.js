import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';

class NavBarLayout extends Component {
  render(){
    return <NavBar {...this.props} getTitle={() => this.props.title}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.navTitle
  };
};

export default connect(mapStateToProps)(NavBarLayout);