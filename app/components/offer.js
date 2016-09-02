import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class OfferLayout extends Component {
  render(){
    let { id, title, points, image, description } = this.props;
    return (
      <TouchableOpacity onPress={() => Actions.offerDetails({ id, title, points, image, description })}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: image}} style={{width: 50, height: 50}} />
            <Text>{title}</Text>
          </View>
          <View>
            <Text>{points}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Offer = connect()(OfferLayout);