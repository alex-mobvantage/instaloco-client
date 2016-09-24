import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';

import Spinner from './spinner';

import { login, loginFromCachedCredentials } from '../actions/auth';

import * as commonStyles from '../styles/common';

class LoginLayout extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loginFromCachedCredentials());
  }

  render(){
    let { dispatch, loading } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <TextInput
          style={commonStyles.inputs.text}
          placeholder='username'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} />
        <TextInput
          style={commonStyles.inputs.text}
          secureTextEntry
          placeholder='password'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} />
        <Button
          containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
          style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
          onPress={() => dispatch(login(this.state.username, this.state.password))}>
          Login
        </Button>
        {loading && <Spinner />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 72
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.loading.login
  };
};

export default Login = connect(mapStateToProps)(LoginLayout);
