import React, { Component } from 'react';
import { AppState, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import Spinner from './spinner';

import { nextImage, likeImage, skipImage } from '../actions/images';
import { follow } from '../actions/followers';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class ImageDisplayLayout extends Component {
  render(){
    let { image_url, media_id, can_follow, user_id, coins_per_like, coins_per_follower, dispatch } = this.props;

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
              Skip
            </Button>
          </View>
          <View style={{flex: 1}}>
            <Button
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
              onPress={() => dispatch(likeImage(media_id))}>
              Like +{coins_per_like}
            </Button>
          </View>
          {can_follow &&
            <View style={{flex: 1}}>
              <Button 
                containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
                style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton]}
                onPress={() => dispatch(follow(user_id))}>
                Follow +{coins_per_follower}
              </Button>
            </View>
          }
        </View>
      </View>
    );
  }
}

const ImageDisplay = connect()(ImageDisplayLayout);

const GetCoinsLayout = React.createClass({
  componentDidMount(){
    AppState.addEventListener('change', this.onAppStateChange);
  },

  componentWillUnmount(){
    AppState.removeEventListener('change', this.onAppStateChange);
  },

  componentWillUpdate(props, state){
    if (!this.props.active &&
        props.active &&
        !props.image_url &&
        !props.loading){
      this.loadImage();
    }
  },

  render(){
    let { loading, image_url, media_id, can_follow, user_id, coins_per_like, coins_per_follower } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.tabbed, commonStyles.containers.centered]}>
        {
          image_url
          ? <ImageDisplay
              image_url={image_url}
              media_id={media_id}
              can_follow={can_follow}
              user_id={user_id}
              coins_per_like={coins_per_like}
              coins_per_follower={coins_per_follower} />
          : <Text style={[commonStyles.fonts.base]}>There are currently no images to like. Check back later</Text>
        }
        <TouchableOpacity onPress={() => Actions.purchaseCoins()}>
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.link, styles.link]}>Click here to get coins faster!</Text>
        </TouchableOpacity>
        {loading && <Spinner />}
      </View>
    );
  },

  onAppStateChange(currentState){
    let { dispatch, image_url } = this.props;
    if (currentState === 'active' && !image_url){
      dispatch(nextImage());
    }
  },

  loadImage(){
    let { dispatch } = this.props;
    dispatch(nextImage());
  }
});

const mapStateToProps = (state) => {
  return {
    ...state.nextImage,
    loading: state.loading.getCoins,
    active: state.nav.mainTab === 'earnCoins',
    coins_per_like: state.config.coins_per_like,
    coins_per_follower: state.config.coins_per_follower
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
  },
  link: {
    alignSelf: 'center',
    marginTop: 12
  }
})

export default GetCoins = connect(mapStateToProps)(GetCoinsLayout);