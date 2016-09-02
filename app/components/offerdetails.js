import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import NavBar from './navbar';

class OfferDetailsLayout extends Component {
  render(){
    let { id, title, points, image, description } = this.props;

    return (
      <View style={{flex: 1, marginTop: 70}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: image}} style={{width: 50, height: 50}} />
            <Text>{title}</Text>
          </View>
          <View>
            <Text>{points}</Text>
          </View>
        </View>
        <Text>{description}</Text>
        <Button>Download</Button>
        <Text>To Get Your Points...</Text>
        
        <Text>Download and test the app for 30-60 seconds</Text>
        <Text>Complete any tutorials</Text>

        <Text>Do not switch networks</Text>
        <Text>Like switching from WiFi to 3G</Text>

        <Text>Can I remove the app from my device?</Text>
        <Text>Yep - be sure you have earned your points first</Text>
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Free Coins' />;
  }
}

export default OfferDetails = connect()(OfferDetailsLayout);