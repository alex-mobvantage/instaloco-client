import React, { Component } from 'react';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as commonStyles from '../styles/common';

const GetLikeImageLayout = React.createClass({
  render(){
    let { image_url, thumbnail_url, image_width, image_height, media_id, likes } = this.props;
    return (
      <TouchableHighlight onPress={() => Actions.purchaseCoins({media_id, image_url, likes})}>
        <View style={{width: image_width, height: image_height}}>
          <Image
            source={{uri: thumbnail_url}}
            style={[{width: image_width, height: image_height}, styles.image]} />
          <View style={styles.captionOuterContainer}>
            <View style={styles.captionInnerContainer}>
              <Text style={[commonStyles.fonts.base, styles.captionText]}>{likes}</Text>
              <Icon name='heart' color='rgba(255, 0, 0, 0.8)' />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  image: {
    borderWidth: 0.5,
    borderColor: 'white'
  },
  captionOuterContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row'
  },
  captionInnerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5
  },
  captionText: {
    color: 'white',
    fontSize: 10,
    padding: 3
  }
});

export default GetLikeImage = connect()(GetLikeImageLayout);