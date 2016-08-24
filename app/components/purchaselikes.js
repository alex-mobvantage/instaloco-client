import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import NavBar from './navbar';

import { purchaseLikes } from '../actions/likes';
import { changeNavTitle } from '../actions/nav';

class PurchaseLikesLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(changeNavTitle('Get Likes'));
  }

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
            <View key={'like-row-' + likes}>
              <Text style={styles.text}>+{likes} likes</Text>
              <Button onPress={() => dispatch(purchaseLikes(media_id, image_url, likes))}>{likes * 2}</Button>
            </View>
          ))
        }
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} />;
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