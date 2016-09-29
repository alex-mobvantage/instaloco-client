import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class OfflineViewLayout extends Component {
  render(){
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.nonav, styles.container]}>
        <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.headerText]}>Oh no! 😱</Text>
        <Text style={[commonStyles.fonts.base, styles.descriptionText]}>
          Looks like you're offline. You'll need to reconnect to use the app.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: colors.primary
  },
  headerText: {
    fontSize: 19
  },
  descriptionText: {
    marginTop: 20
  }
});

export default OfflineView = connect()(OfflineViewLayout);