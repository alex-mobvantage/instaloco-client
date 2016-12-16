import React, { Component } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchSurvey } from '../actions/surveys';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class SurveyBannerLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(fetchSurvey());
  }

  render(){
    let { survey_url } = this.props;
    if (!survey_url){
      return null;
    }

    return (
      <TouchableOpacity onPress={() => Linking.openURL(survey_url)}>
        <View style={styles.container}>
          <Text style={styles.emoji}>💰</Text>
          <View>
            <Text style={[commonStyles.fonts.base, styles.text]}>TRY A SURVEY</Text>
            <Text style={[commonStyles.fonts.base, styles.text]}>EARN MORE COINS</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    survey_url: state.survey 
  };
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 50
  },
  container: {
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10
  },
  text: {
    fontSize: 20,
    color: colors.accent,
    fontWeight: 'bold'
  }
})

export default SurveyBanner = connect(mapStateToProps)(SurveyBannerLayout);