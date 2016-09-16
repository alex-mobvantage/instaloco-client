import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';

import { nextImage, likeImage, skipImage } from '../actions/images';
import { follow } from '../actions/followers';

import * as styles from '../styles/common';

class ImageDisplayLayout extends Component {
  render(){
    let { image_url, media_id, can_follow, user_id, dispatch } = this.props;

    return (
      <View>
        <Image
          source={{uri: image_url}}
          style={{width: 320, height: 320}} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[styles.buttons.base, styles.buttons.secondary]}
              style={[styles.fonts.base, styles.fonts.button, styles.fonts.secondaryButton]}
              onPress={() => dispatch(skipImage(media_id))}>
              Skip
            </Button>
          </View>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[styles.buttons.base, styles.buttons.primary]}
              style={[styles.fonts.base, styles.fonts.button, styles.fonts.primaryButton]}
              onPress={() => dispatch(likeImage(media_id))}>
              Like
            </Button>
          </View>
          {can_follow &&
            <Button 
              containerStyle={[styles.buttons.base, styles.buttons.primary]}
              style={[styles.fonts.base, styles.fonts.button, styles.fonts.primaryButton]}
              onPress={() => dispatch(follow(user_id))}>
              Follow
            </Button>}
          </View>
      </View>
    );
  }
}

const ImageDisplay = connect()(ImageDisplayLayout);

const GetCoinsLayout = React.createClass({
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(nextImage());
  },

  render(){
    let { loading, image_url, media_id, can_follow, user_id } = this.props;

    return (
      <View style={[styles.containers.base, styles.containers.tabbed, styles.containers.centered]}>
        {
          image_url
          ? <ImageDisplay
              image_url={image_url}
              media_id={media_id}
              can_follow={can_follow}
              user_id={user_id} />
          : <Text>There are currently no images to like. Check back later</Text>
        }
        {loading && <Spinner />}
      </View>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    ...state.nextImage,
    loading: state.loading.getCoins
  };
};

export default GetCoins = connect(mapStateToProps)(GetCoinsLayout);