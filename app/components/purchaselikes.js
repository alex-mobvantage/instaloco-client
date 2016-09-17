import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[commonStyles.fonts.base, commonStyles.fonts.header]}>{likes}</Text>
            <Icon name='heart' color={colors.heart} size={17} />
          </View>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.header, {marginTop: 12}]}>
            Choose how many likes you would like to get
          </Text>
          
          <View style={[commonStyles.containers.list]}>
          {
            [25, 50, 100, 300, 1000, 5000, 10000].map((likes) => (
              <View key={'like-row-' + likes} style={commonStyles.containers.listItem}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='heart' color={colors.heart} />
                  <Text style={[commonStyles.fonts.base, styles.likesText]}>+{likes}</Text>
                </View>
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
    marginLeft: 5
  }
});

const mapStateToProps = (state) => {
  return {
    coins_per_like: state.config.coins_per_like,
    loading: state.loading.purchaseLikes
  };
};

export default PurchaseLikes = connect(mapStateToProps)(PurchaseLikesLayout);