import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import { logout } from '../actions/auth';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class MoreLayout extends Component {
  render(){
    let { dispatch } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.tabbed, styles.container]}>
        <View style={commonStyles.containers.list}>
          <TouchableHighlight
            underlayColor='rgba(0, 0, 0, 0.05)'
            style={[commonStyles.containers.listItem, styles.listItem]}
            onPress={() => Actions.faq()}>
            <Text
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}>
              FAQ
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='rgba(0, 0, 0, 0.05)'
            style={[commonStyles.containers.listItem, styles.listItem]}>
            <Text
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}>
              Support
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='rgba(0, 0, 0, 0.05)'
            style={[commonStyles.containers.listItem, styles.listItem]}
            onPress={() => Actions.legal()}>
            <Text
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}>
              Legal
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='rgba(0, 0, 0, 0.05)'
            style={[commonStyles.containers.listItem, styles.listItem]}
            onPress={() => dispatch(logout())}>
            <Text
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}>
              Logout
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  listItem: {
    justifyContent: 'center',
    padding: 12
  },
  button: {
    fontSize: 19,
    color: '#007aff'
  }
});

export default More = connect()(MoreLayout);