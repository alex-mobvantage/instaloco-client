import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { changeNavTitle } from '../actions/nav';

import NavBar from './navbar';

class FAQLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(changeNavTitle('FAQ'));
  }

  render(){
    return (
      <View style={styles.view}>
        <Text style={styles.text}>FAQ</Text>
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} />;
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#000000'
  },
  view: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FAQ = connect()(FAQLayout);