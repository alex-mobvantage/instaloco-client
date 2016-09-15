import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import Spinner from 'react-native-loading-spinner-overlay';

import NavBar from './navbar';

import { beginOffer } from '../actions/offers';

class OfferDetailsLayout extends Component {
  render(){
    let { loading, dispatch, id, title, points, image, description, click_id, redirect_url } = this.props;

    return (
      <View style={{flex: 1, marginTop: 70}}>
        <Spinner visible={loading} />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {image && <Image source={{uri: image}} style={{width: 50, height: 50}} />}
            <Text>{title}</Text>
          </View>
          <View>
            <Text>{points}</Text>
          </View>
        </View>
        <Text>{description}</Text>
        <Button disabled={!!click_id} onPress={() => dispatch(beginOffer(id, redirect_url))}>{click_id ? 'In progess' : 'Download'}</Button>
        {click_id && <Button onPress={() => Linking.openURL(redirect_url)}>Link not working? Click here to try again</Button>}
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

const mapStateToProps = (state, ownProps) => {
  return {
    click_id: ownProps.click_id || state.offer.click_id,
    loading: state.loading.offerDetails
  };
};

export default OfferDetails = connect(mapStateToProps)(OfferDetailsLayout);