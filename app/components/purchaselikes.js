import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';
import NavBar from './navbar';

import { purchaseLikes } from '../actions/likes';

class PurchaseLikesLayout extends Component {
  render(){
    let { loading, image_url, media_id, likes, coins_per_like, dispatch } = this.props;
    return (
      <View style={styles.view}>
        <Image 
          source={{uri: image_url}}
          style={{width: 150, height: 150}} />
        <Text>{likes} likes</Text>
        <Text style={styles.text}>
          Choose how many likes you would like to get
        </Text>
        {
          [25, 50, 100, 300, 1000, 5000, 10000].map((likes) => (
            <View key={'like-row-' + likes}>
              <Text style={styles.text}>+{likes} likes</Text>
              <Button onPress={() => dispatch(purchaseLikes(media_id, image_url, likes))}>{likes * coins_per_like}</Button>
            </View>
          ))
        }
        {loading && <Spinner />}
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Get likes' />;
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

const mapStateToProps = (state) => {
  return {
    coins_per_like: state.config.coins_per_like,
    loading: state.loading.purchaseLikes
  };
};

export default PurchaseLikes = connect(mapStateToProps)(PurchaseLikesLayout);