import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';
import NavBar from './navbar';

import { purchaseLikes } from '../actions/likes';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class PurchaseLikesLayout extends Component {
  render(){
    let { loading, image_url, media_id, likes, coins_per_like, dispatch } = this.props;
    let image_width = Dimensions.get('window').width;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <ScrollView contentContainerStyle={[commonStyles.containers.centered, styles.scrollView]}>
          <Image 
            source={{uri: image_url}}
            style={[styles.image, {width: image_width, height: image_width}]} />
          <Text style={[commonStyles.fonts.base]}>{likes} ❤️</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.header, {marginTop: 12}]}>
            Choose how many likes you would like to get
          </Text>
          
          <View style={[commonStyles.containers.list]}>
          {
            [25, 50, 100, 300, 1000, 5000, 10000].map((likes) => (
              <View key={'like-row-' + likes} style={commonStyles.containers.listItem}>
                <Text style={[commonStyles.fonts.base, styles.likesText]}>❤️ +{likes}</Text>
                <Button
                  containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
                  style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton, styles.coinButton]}
                  onPress={() => dispatch(purchaseLikes(media_id, image_url, likes))}>{likes * coins_per_like}</Button>
              </View>
            ))
          }
          </View>
        </ScrollView>
        {loading && <Spinner />}
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Get likes' />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  scrollView: {
    paddingBottom: 50
  },
  image: {
    borderWidth: 1,
    borderColor: colors.secondary,
    resizeMode: 'cover'
  },
  likesText: {
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    coins_per_like: state.config.coins_per_like,
    loading: state.loading.purchaseLikes
  };
};

export default PurchaseLikes = connect(mapStateToProps)(PurchaseLikesLayout);