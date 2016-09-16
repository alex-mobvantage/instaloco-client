import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import { invalidateAccessToken } from '../actions/auth';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class MoreLayout extends Component {
  render(){
    let { dispatch } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.tabbed, styles.container]}>
        <View style={commonStyles.containers.list}>
          <View style={[commonStyles.containers.listItem, styles.listItem]}>
            <Button
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}
              onPress={() => Actions.faq()}>
              FAQ
            </Button>
          </View>
          <View style={[commonStyles.containers.listItem, styles.listItem]}>
            <Button
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}>
              Support
            </Button>
          </View>
          <View style={[commonStyles.containers.listItem, styles.listItem]}>
            <Button
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}
              onPress={() => Actions.legal()}>
              Legal
            </Button>
          </View>
          <View style={[commonStyles.containers.listItem, styles.listItem]}>
            <Button
              style={[commonStyles.fonts.base, commonStyles.fonts.button, styles.button]}
              onPress={() => dispatch(invalidateAccessToken())}>
              Logout
            </Button>
          </View>
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
    fontSize: 19
  }
});

export default More = connect()(MoreLayout);