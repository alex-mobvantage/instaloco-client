import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import { invalidateAccessToken } from '../actions/auth';

class MoreLayout extends Component {
  render(){
    let { dispatch } = this.props;

    return (
      <View style={styles.view}>
        <Button onPress={() => Actions.faq()}>FAQ</Button>
        <Button>Support</Button>
        <Button onPress={() => Actions.legal()}>Legal</Button>
        <Button onPress={() => dispatch(invalidateAccessToken())}>Logout</Button>
      </View>
    );
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

export default More = connect()(MoreLayout);