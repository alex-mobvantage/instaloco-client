import React, { Component } from 'react';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class WelcomeView extends Component {
  render(){
    let dimensions = Dimensions.get('window');
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.nonav, styles.container]}>
        <Image
          source={require('../resources/welcomebackground.png')}
          style={[styles.background, {width: dimensions.width, height: dimensions.height}]}
          resizeMode='contain' />
        <View style={styles.overlay}>
          <Image source={require('../resources/logo.png')} style={styles.logo} resizeMode='contain' />
          <View style={styles.headerContainer}>
            <Text style={[commonStyles.fonts.base, styles.name]}>InstaLoco</Text>
            <Text style={[commonStyles.fonts.base, styles.tagline]}>Get Likes and Followers for Instagram</Text>
          </View>
          <Button
            containerStyle={styles.loginButtonContainer}
            style={[commonStyles.fonts.base, styles.loginButton]}>
            Login with Instagram
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch'
  },
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 130,
    height: 130
  },
  headerContainer: {
    paddingLeft: 72,
    paddingRight: 72
  },
  name: {
    fontSize: 50,
    color: 'white'
  },
  tagline: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 30
  },
  loginButtonContainer: {
    marginTop: 130,
    backgroundColor: 'rgb(237, 113, 97)',
    borderWidth: 4,
    borderColor: 'rgb(192, 58, 43)',
    borderRadius: 6,
    padding: 12
  },
  loginButton: {
    color: 'white',
    fontSize: 20
  }
});

export default WelcomeView;
