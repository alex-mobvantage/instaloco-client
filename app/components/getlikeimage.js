import React, { Component } from 'react';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const GetLikeImageLayout = React.createClass({
  render(){
    let { image_url, image_width, image_height, media_id, likes } = this.props;
    return (
      <TouchableHighlight onPress={() => Actions.purchaseLikes({media_id, image_url, likes})}>
        <View>
          <Image
            source={{uri: image_url}}
            style={{width: image_width, height: image_height}} />
          <Text>{likes} likes</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

export default GetLikeImage = connect()(GetLikeImageLayout);