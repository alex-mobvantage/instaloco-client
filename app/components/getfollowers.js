import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import Spinner from 'react-native-loading-spinner-overlay';

import { purchaseFollowers } from '../actions/followers';

class GetFollowersLayout extends Component {
  render(){
    let { loading, profile_image, followers, following, coins_per_follower, dispatch } = this.props;

    return (
      <View style={styles.view}>
        <Spinner visible={loading} />
        <Image
          source={{uri: profile_image}}
          style={{width: 150, height: 150}} />
        <Text>{followers} followers</Text>
        <Text>{following} following</Text>
        <View style={{marginTop: 10}}>
          {
            [20, 60, 200, 600, 1000, 2000, 6000].map(val => (
              <View key={'follower-row-' + val}>
                <Text>+{val} followers</Text>
                <Button onPress={() => dispatch(purchaseFollowers(val))}>{val * coins_per_follower}</Button>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#000000'
  },
  view: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    profile_image: state.user.profile.profile_picture,
    followers: state.user.profile.counts.followed_by,
    following: state.user.profile.counts.follows,
    coins_per_follower: state.config.coins_per_follower,
    loading: state.loading.getFollowers
  }
}

export default GetFollowers = connect(mapStateToProps)(GetFollowersLayout);