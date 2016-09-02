import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchOffer } from '../actions/offers';

class OfferLayout extends Component {
  render(){
    let { title, points, image } = this.props;
    return (
      <TouchableOpacity onPress={this.pressHandler.bind(this)}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {image && <Image source={{uri: image}} style={{width: 50, height: 50}} />}
            <Text>{title}</Text>
          </View>
          <View>
            <Text>{points}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  pressHandler(){
    let { dispatch, id, title, points, image, description, click_id, redirect_url } = this.props;
    
    dispatch(fetchOffer(id));
    Actions.offerDetails({ id, title, points, image, description, click_id, redirect_url });
  }
}

export default Offer = connect()(OfferLayout);