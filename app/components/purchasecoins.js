import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

class PurchaseCoinsLayout extends Component {
  render(){
    let { products } = this.props;

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
      </View>
    );
  }
}

const mapStatesToProps = (state) => {
  console.log(state);
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