import React from 'react';
import { AsyncStorage, Linking, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import qs from 'qs';
import { Actions } from 'react-native-router-flux'

const LoginLayout = React.createClass({
  componentDidMount(){
    Linking.addEventListener('url', this._handleOpenURL);

    AsyncStorage.getItem('access_token', (error, token) => {
      if (token){
        Actions.main();
      }
    });
  },

  componentWillUnmount(){
    Linking.removeEventListener('url', this._handleOpenURL);
  },

  _handleOpenURL(event){
    let url = new URL(event.url);
    let path = url.pathname.substring(2); // chop off initial '//'
    if (path === 'login'){
      let params = url.search.substring(1); // chop off initial '?'
      let data = qs.parse(params);

      AsyncStorage.setItem('access_token', data.access_token, (error) => {
        Actions.main();
      });
    }
  },

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => Linking.openURL('https://api.instagram.com/oauth/authorize/?client_id=cfa0b79d5bbe413492a09c9069ccbe58&redirect_uri=' + encodeURIComponent('http://likesforapps.herokuapp.com/auth') + '&response_type=code')}>
          Login
        </Button>
      </View>
    );
  },
});

export default Login = connect()(LoginLayout);
