import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';

import { purchaseFollowers } from '../actions/followers';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class GetFollowersLayout extends Component {
  render(){
    let { loading, profile_image, followers, following, coins_per_follower, dispatch } = this.props;

    return (
      <View style={[commonStyles.containers.centered, commonStyles.containers.base, commonStyles.containers.tabbed, styles.container]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.headerColumn}>
            <Text style={[commonStyles.fonts.base, commonStyles.fonts.header]}>{followers}</Text>
            <Text style={[commonStyles.fonts.base]}>followers</Text>
          </View>
          <View style={styles.headerColumn}>
            <Image
              source={{uri: profile_image}}
              style={styles.image} />
          </View>
          <View style={styles.headerColumn}>
            <Text style={[commonStyles.fonts.base, commonStyles.fonts.header]}>{following}</Text>
            <Text style={[commonStyles.fonts.base]}>following</Text>
          </View>
        </View>
        <View style={commonStyles.containers.list}>
          {
            [20, 60, 200, 600, 1000, 2000, 6000].map(val => (
              <View key={'follower-row-' + val} style={commonStyles.containers.listItem}>
                <Text style={[commonStyles.fonts.base, styles.followerText]}>👥 +{val}</Text>
                <Button
                  containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
                  style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
                  onPress={() => dispatch(purchaseFollowers(val))}>
                  {val * coins_per_follower}
                </Button>
              </View>
            ))
          }
        </View>
        {loading && <Spinner />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  headerColumn: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.secondary
  },
  followerText: {
    alignSelf: 'center'
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