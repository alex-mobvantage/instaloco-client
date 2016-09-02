import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class OfferLayout extends Component {
  render(){
    let { title, points, image } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: image}} style={{width: 50, height: 50}} />
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{points}</Text>
        </View>
      </View>
    );
  }
}

export default Offer = connect()(OfferLayout);