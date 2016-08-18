import React, { Component } from 'react';
import { Linking, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';

class LoginLayout extends Component {
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => Linking.openURL('https://api.instagram.com/oauth/authorize/?client_id=cfa0b79d5bbe413492a09c9069ccbe58&redirect_uri=' + encodeURIComponent('http://likesforapps.herokuapp.com/auth') + '&response_type=code')}>
          Login
        </Button>
      </View>
    );
  }
};

export default Login = connect()(LoginLayout);
