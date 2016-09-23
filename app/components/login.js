import React from 'react';
import { AsyncStorage, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import qs from 'qs';
import { Actions } from 'react-native-router-flux'

import { loadAccessToken, saveAccessToken } from '../actions/auth';

const LoginLayout = React.createClass({
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loadAccessToken());
  },

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => Linking.openURL(
            'https://api.instagram.com/oauth/authorize/?' + qs.stringify({
              client_id: 'cfa0b79d5bbe413492a09c9069ccbe58',
              redirect_uri: 'http://likesforapps.herokuapp.com/auth',
              response_type: 'code',
              scope: 'likes public_content relationships'
            }))}>
          Login
        </Button>
      </View>
    );
  },
});

export default Login = connect()(LoginLayout);
