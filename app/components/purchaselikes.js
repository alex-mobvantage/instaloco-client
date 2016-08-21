import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import { purchaseLikes } from '../actions/likes';

class PurchaseLikesLayout extends Component {
  render(){
    let { image_url, media_id, dispatch } = this.props;
    return (
      <View style={styles.view}>
        <Image 
          source={{uri: image_url}}
          style={{width: 150, height: 150}} />
        <Text style={styles.text}>
          Choose how many likes you would like to get
        </Text>
        {
          [25, 50, 100, 300, 1000, 5000, 10000].map((likes) => (
            <View>
              <Text style={styles.text}>+{likes} likes</Text>
              <Button onPress={() => dispatch(purchaseLikes(media_id, image_url, likes))}>{likes * 2}</Button>
            </View>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#000000'
  },
  view: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PurchaseLikes = connect()(PurchaseLikesLayout);