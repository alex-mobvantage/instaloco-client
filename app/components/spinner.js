import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class Spinner extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='white' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});