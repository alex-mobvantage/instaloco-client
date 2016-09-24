import React, { Component } from 'react';
import { AppState, ListView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchOffers } from '../actions/offers';

import Spinner from './spinner';
import Offer from './offer';

import * as commonStyles from '../styles/common';

const OfferWallLayout = React.createClass({
  componentDidMount(){
    AppState.addEventListener('change', this.onAppStateChange);
    this.fetchOffers();
  },

  componentWillUnmount(){
    AppState.removeEventListener('change', this.onAppStateChange);
  },

  componentWillUpdate(props, state){
    if (props.active && props.offers.length === 0 && !props.loading){
      this.fetchOffers();
    }
  },
  
  render(){
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.tabbed, styles.container]}>
        <ListView
          dataSource={this.props.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => (
            <Offer
              id={rowData.id}
              title={rowData.title}
              image={rowData.image}
              points={rowData.points}
              description={rowData.description}
              click_id={rowData.click_id}
              redirect_url={rowData.redirect_url} />
          )} />
        {this.props.loading && <Spinner />}
      </View>
    );
  },

  onAppStateChange(currentState){
    if (currentState === 'active'){
      this.fetchOffers();
    }
  },

  fetchOffers(){
    let { dispatch } = this.props;
    dispatch(fetchOffers());
  }
});

const dataSourceFromOffers = (offers) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return ds.cloneWithRows(offers || []);
}

const mapStateToProps = (state) => {
  return {
    dataSource: dataSourceFromOffers(state.offers),
    offers: state.offers,
    loading: state.loading.offerwall,
    active: state.mainTab === 'freeCoins'
  };
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 50
  }
})

export default OfferWall = connect(mapStateToProps)(OfferWallLayout);