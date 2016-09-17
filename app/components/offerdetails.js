import React, { Component } from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import Spinner from './spinner';
import NavBar from './navbar';

import { beginOffer } from '../actions/offers';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class OfferDetailsLayout extends Component {
  render(){
    let { loading, dispatch, id, title, points, image, description, click_id, redirect_url } = this.props;

    return (
      <View style={[commonStyles.containers.base, styles.container]}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            {image && <Image source={{uri: image}} style={{width: 50, height: 50}} />}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.titleStyle]}>{title}</Text>
            </View>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={[commonStyles.fonts.base, styles.plusText]}>+</Text>
            <Text style={[commonStyles.fonts.base, styles.pointsText]}>{points}</Text>
          </View>
        </View>
        <Text style={commonStyles.fonts.base}>{description}</Text>
        <Button
          containerStyle={[commonStyles.buttons.base, commonStyles.buttons.primary, styles.downloadButton]}
          style={[commonStyles.fonts.base, commonStyles.fonts.button, click_id ? commonStyles.fonts.primaryButtonDisabled : commonStyles.fonts.primaryButton]}
          disabled={!!click_id}
          onPress={() => dispatch(beginOffer(id, redirect_url))}>
          {click_id ? 'In progess' : 'Download'}
        </Button>
        {click_id &&
          <TouchableOpacity onPress={() => Linking.openURL(redirect_url)}>
            <Text style={[commonStyles.fonts.base, commonStyles.fonts.link, styles.link]}>Link not working? Click here to try again</Text>
          </TouchableOpacity>
        }
        <View style={styles.instructionContainer}>
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.instructionHeaderText]}>To Get Your Points...</Text>
          
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.instructionRuleText]}>Download and test the app for 30-60 seconds</Text>
          <Text style={[commonStyles.fonts.base]}>Complete any tutorials</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.instructionRuleText]}>Do not switch networks</Text>
          <Text style={[commonStyles.fonts.base]}>Like switching from WiFi to 3G</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, styles.instructionRuleText]}>Can I remove the app from my device?</Text>
          <Text style={[commonStyles.fonts.base]}>Yep - be sure you have earned your points first</Text>
        </View>
        {loading && <Spinner />}
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Free Coins' />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    click_id: ownProps.click_id || state.offer.click_id,
    loading: state.loading.offerDetails
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  headerContainer: {
    flexDirection: 'row',
    height: 75,
    alignItems: 'center'
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
  },
  downloadButton: {
    marginTop: 12
  },
  link: {
    alignSelf: 'center',
    marginTop: 12
  },
  instructionContainer: {
    borderTopWidth: 1,
    borderColor: colors.secondary,
    marginTop: 24
  },
  instructionHeaderText: {
    alignSelf: 'center',
    marginTop: 12
  },
  instructionRuleText: {
    marginTop: 12
  }
});

export default OfferDetails = connect(mapStateToProps)(OfferDetailsLayout);