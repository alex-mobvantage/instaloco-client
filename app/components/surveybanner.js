import React, { Component } from 'react';
import { Linking, TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchSurvey } from '../actions/surveys';

class SurveyBannerLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(fetchSurvey());
  }

  render(){
    let { survey_url } = this.props;
    if (!survey_url){
      return <View />;
    }

    return (
      <TouchableOpacity onPress={() => Linking.openURL(survey_url)}>
        <Text>Complete a survey</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    survey_url: state.survey 
  };
};

export const SurveyBanner = connect(mapStateToProps)(SurveyBannerLayout);