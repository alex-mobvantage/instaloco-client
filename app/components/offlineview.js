import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class OfflineViewLayout extends Component {
  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 50}}>
        <Text style={{fontSize: 19}}>Oh no! 😱</Text>
        <Text style={{marginTop: 20}}>Looks like you're offline. You'll need to reconnect to use the app</Text>
      </View>
    );
  }
}

export default OfflineView = connect()(OfflineViewLayout);