import React, { Component } from 'react';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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
          <View style={styles.captionContainer}>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={[commonStyles.fonts.base, styles.captionText]}>{likes} ❤️</Text>
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
  captionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row'
  },
  captionText: {
    color: 'white',
    fontSize: 10,
    padding: 3
  }
});

export default GetLikeImage = connect()(GetLikeImageLayout);