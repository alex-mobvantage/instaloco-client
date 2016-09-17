import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchOffer } from '../actions/offers';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class OfferLayout extends Component {
  render(){
    let { title, points, image } = this.props;
    return (
      <TouchableOpacity onPress={this.pressHandler.bind(this)}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            {image && <Image source={{uri: image}} style={{width: 50, height: 50}} />}
            <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.titleStyle]}>{title}</Text>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={[commonStyles.fonts.base, styles.plusText]}>+</Text>
            <Text style={[commonStyles.fonts.base, styles.pointsText]}>{points}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  pressHandler(){
    let { dispatch, id, title, points, image, description, click_id, redirect_url } = this.props;
    
    dispatch(fetchOffer(id));
    Actions.offerDetails({ id, title, points, image, description, click_id, redirect_url });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  titleStyle: {
    marginLeft: 5
  },
  pointsContainer: {
    borderWidth: 1,
    borderColor: colors.accent,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    flexDirection: 'row',
    marginLeft: 5
  },
  pointsText: {
    color: colors.accent
  },
  plusText: {
    color: colors.accent,
    alignSelf: 'flex-start',
    fontSize: 10,
    position: 'absolute',
    left: 3,
    top: 3
  }
});

export default Offer = connect()(OfferLayout);