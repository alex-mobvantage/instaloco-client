import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <Text style={[commonStyles.fonts.base, commonStyles.fonts.header]}>Get more coins faster!</Text>
        <View style={styles.listContainer}>
        {
          products.map((product) => (
            <View key={'product-' + product.identifier} style={styles.listItem}>
              <Text style={[commonStyles.fonts.base, styles.coinTextStyle]}>{product.title}</Text>
              <Button
                containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary]}
                style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.primaryButton, styles.coinButton]}
                onPress={() => dispatch(purchaseCoins(product.identifier))}>
                {product.priceString}
              </Button>
            </View>
          ))
        }
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            containerStyle={[commonStyles.buttons.base, commonStyles.buttons.secondary, styles.skipButton]}
            style={[commonStyles.fonts.base, commonStyles.fonts.button, commonStyles.fonts.secondaryButton]}
            onPress={() => Actions.purchaseLikes({media_id, image_url, likes})}>
            Skip
          </Button>
        </View>
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
  listContainer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: colors.secondary,
    alignSelf: 'stretch',
    marginTop: 30
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12
  },
  coinTextStyle: {
    alignSelf: 'center'
  },
  coinButton: {
    paddingLeft: 8,
    paddingRight: 8
  },
  skipButton: {
    flex: 1,
    marginTop: 12
  }
});

export default PurchaseCoins = connect(mapStatesToProps)(PurchaseCoinsLayout);