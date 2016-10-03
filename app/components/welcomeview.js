import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class WelcomeView extends Component {
  render(){
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.nonav, styles.container]}>
        <Text>InstaLoco</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 72,
    backgroundColor: colors.primary
  }
});

export default WelcomeView;
