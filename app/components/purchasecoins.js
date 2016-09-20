import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import Spinner from './spinner';
import NavBar from './navbar';

import { purchaseCoins } from '../actions/purchase';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class PurchaseCoinsLayout extends Component {
  render(){
    let { loading, dispatch, products, media_id, image_url, likes } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <Text style={[commonStyles.fonts.base, commonStyles.fonts.header]}>Get coins faster!</Text>
        <View style={commonStyles.containers.list}>
        {
          products.map((product) => (
            <TouchableOpacity key={'product-btn-' + product.identifier} onPress={() => dispatch(purchaseCoins(product.identifier))}>
              <View key={'product-' + product.identifier} style={commonStyles.containers.listItem}>
                <Text style={[commonStyles.fonts.base, styles.coinTextStyle]}>{product.title}</Text>
                <Button
                  containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
                  style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton, styles.coinButton]}
                  onPress={() => dispatch(purchaseCoins(product.identifier))}>
                  {product.priceString}
                </Button>
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
        {media_id && image_url && likes &&
          <View style={{flexDirection: 'row'}}>
            <Button
              containerStyle={[commonStyles.buttons.base, commonStyles.buttons.secondary, styles.skipButton]}
              style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.secondaryButton]}
              onPress={() => Actions.purchaseLikes({media_id, image_url, likes})}>
              Skip
            </Button>
          </View>
        }
        {loading && <Spinner />}
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Bonus Coins' />;
  }
}

const mapStatesToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading.purchaseCoins
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  coinTextStyle: {
    alignSelf: 'center'
  },
  skipButton: {
    flex: 1,
    marginTop: 12
  }
});

export default PurchaseCoins = connect(mapStatesToProps)(PurchaseCoinsLayout);