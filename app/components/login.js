import React, { Component } from 'react';
import { AsyncStorage, TextInput, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import qs from 'qs';
import { Actions } from 'react-native-router-flux'

import { login, loadAccessToken, saveAccessToken } from '../actions/auth';

import * as commonStyles from '../styles/common';

class LoginLayout extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loadAccessToken());
  }

  render(){
    let { dispatch } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <TextInput
          style={commonStyles.inputs.text}
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} />
        <TextInput
          style={commonStyles.inputs.text}
          secureTextEntry
          placeholder='password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} />
        <Button
          containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
          style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
          onPress={() => dispatch(login(this.state.username, this.state.password))}>
          Login
        </Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 72
  }
});

export default Login = connect()(LoginLayout);
