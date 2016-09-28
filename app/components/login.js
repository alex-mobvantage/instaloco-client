import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <View style={styles.headerContainer}>
          <Text
            style={[commonStyles.fonts.base, styles.header]}>
            Likes For Apps
          </Text>
          <Icon name='heart' color={colors.heart} size={30} />
        </View>
        <TextInput
          style={[commonStyles.fonts.base, commonStyles.inputs.text, styles.input]}
          placeholder='username'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} />
        <TextInput
          style={[commonStyles.fonts.base, commonStyles.inputs.text, styles.input]}
          secureTextEntry
          placeholder='password'
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
        {loading && <Spinner />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 72,
    marginTop: 0
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center'
  },
  header: {
    fontSize: 30
  },
  input: {
    margin: 5
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.loading.login
  };
};

export default Login = connect(mapStateToProps)(LoginLayout);
