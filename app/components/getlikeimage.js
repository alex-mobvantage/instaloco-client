import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const GetLikeImageLayout = React.createClass({
  render(){
    return (
      <View>
        <Image source={{uri: this.props.image_url}} style={{width: this.props.imageWidth, height: this.props.imageHeight}} />
      </View>
    );
  }
});

export default GetLikeImage = connect()(GetLikeImageLayout);