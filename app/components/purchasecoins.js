import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import NavBar from './navbar';

class PurchaseCoinsLayout extends Component {
  render(){
    let { products, media_id, image_url, likes } = this.props;

    return (
      <View style={styles.view}>
        {
          products.map((product) => (
            <View key={'product-' + product.identifier}>
              <Text>{product.title}</Text>
              <Button>{product.priceString}</Button>
            </View>
          ))
        }
        <Button onPress={() => Actions.purchaseLikes({media_id, image_url, likes})}>Skip</Button>
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Bonus Coins' />;
  }
}

const mapStatesToProps = (state) => {
  return {
    products: state.products
  }
};

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

export default PurchaseCoins = connect(mapStatesToProps)(PurchaseCoinsLayout);