import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';

import { nextImage, likeImage, skipImage } from '../actions/images';
import { follow } from '../actions/followers';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class ImageDisplayLayout extends Component {
  render(){
    let { image_url, media_id, can_follow, user_id, dispatch } = this.props;

    return (
      <View>
        <Image
          source={{uri: image_url}}
          style={styles.image} />
        <View style={styles.buttonContainer}>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.secondary]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.secondaryButton]}
              onPress={() => dispatch(skipImage(media_id))}>
              SKIP
            </Button>
          </View>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
              onPress={() => dispatch(likeImage(media_id))}>
              LIKE
            </Button>
          </View>
          {can_follow &&
            <Button 
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
              onPress={() => dispatch(follow(user_id))}>
              FOLLOW
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
      <View style={[commonStyles.containers.base, commonStyles.containers.tabbed, commonStyles.containers.centered]}>
        {
          image_url
          ? <ImageDisplay
              image_url={image_url}
              media_id={media_id}
              can_follow={can_follow}
              user_id={user_id} />
          : <Text style={[commonStyles.fonts.base]}>There are currently no images to like. Check back later</Text>
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
  image: {
    width: Dimensions.get('window').width,
    height: 320,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.secondary
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 12,
    paddingRight: 12
  }
})

export default GetCoins = connect(mapStateToProps)(GetCoinsLayout);