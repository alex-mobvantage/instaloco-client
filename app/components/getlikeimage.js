import React, { Component } from 'react';
import { Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const GetLikeImageLayout = React.createClass({
  render(){
    let { image_url, image_width, image_height, media_id } = this.props;
    return (
      <TouchableHighlight onPress={() => Actions.purchaseLikes({media_id, image_url})}>
        <Image
          source={{uri: image_url}}
          style={{width: image_width, height: image_height}} />
      </TouchableHighlight>
    );
  }
});

export default GetLikeImage = connect()(GetLikeImageLayout);