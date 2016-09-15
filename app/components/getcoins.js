import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';

import { nextImage, likeImage, skipImage } from '../actions/images';
import { follow } from '../actions/followers';

class ImageDisplayLayout extends Component {
  render(){
    let { image_url, media_id, can_follow, user_id, dispatch } = this.props;

    return (
      <View>
        <Image
          source={{uri: image_url}}
          style={{width: 150, height: 150}} />
        <Button onPress={() => dispatch(skipImage(media_id))}>Skip</Button>
        <Button onPress={() => dispatch(likeImage(media_id))}>Like</Button>
        {can_follow && <Button onPress={() => dispatch(follow(user_id))}>Follow</Button>}
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
      <View style={styles.view}>
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

export default GetCoins = connect(mapStateToProps)(GetCoinsLayout);