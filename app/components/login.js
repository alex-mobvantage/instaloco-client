import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Spinner from './spinner';

import { login } from '../actions/auth';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class LoginLayout extends Component {
  state = {
    username: '',
    password: ''
  }

  render(){
    let { dispatch, loading } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, commonStyles.containers.nonav, styles.container]}>
        <Text
          style={[commonStyles.fonts.base, styles.header]}>
          Login with Instagram
        </Text>
        <TextInput
          style={[commonStyles.fonts.base, commonStyles.inputs.text, styles.input]}
          placeholder='Instagram username'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} />
        <TextInput
          style={[commonStyles.fonts.base, commonStyles.inputs.text, styles.input]}
          secureTextEntry
          placeholder='Instagram password'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
              onPress={() => dispatch(login(this.state.username, this.state.password))}>
              Login
            </Button>
          </View>
        </View>
        <TouchableOpacity onPress={() => Actions.welcome({ type: 'back' })}>
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.link, styles.link]}>Back</Text>
        </TouchableOpacity>
        {loading && <Spinner />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 72
  },
  header: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center'
  },
  input: {
    margin: 5
  },
  link: {
    alignSelf: 'center',
    marginTop: 12
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.loading.login
  };
};

export default Login = connect(mapStateToProps)(LoginLayout);
