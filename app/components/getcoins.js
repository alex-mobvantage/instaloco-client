import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { nextImage } from '../actions/images';

const GetCoinsLayout = React.createClass({
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(nextImage());
  },

  render(){
    let { image_url } = this.props;

    return (
      <View style={styles.view}>
        {
          image_url
          ? <Image
              source={{uri: image_url}}
              style={{width: 150, height: 150}} />
          : <Text>There are currently no images to like. Check back later</Text>
        }
      </View>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    image_url: state.nextImage
  };
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

export default GetCoins = connect(mapStateToProps)(GetCoinsLayout);