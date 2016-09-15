import React, { Component } from 'react';
import { AppState, ListView, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchOffers } from '../actions/offers';

import Spinner from './spinner';
import Offer from './offer';

class OfferWallLayout extends Component {
  componentDidMount(){
    this.fetchOffers();

    AppState.addEventListener('change', this.onAppStateChange.bind(this));
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.onAppStateChange.bind(this));
  }
  
  render(){
    return (
      <View style={{flex: 1}}>
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
          )}
          style={{marginTop: 70}} />
        {this.props.loading && <Spinner />}
      </View>
    );
  }

  onAppStateChange(currentState){
    if (currentState === 'active'){
      this.fetchOffers();
    }
  }

  fetchOffers(){
    let { dispatch } = this.props;
    dispatch(fetchOffers());
  }
}

const dataSourceFromOffers = (offers) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return ds.cloneWithRows(offers || []);
}

const mapStateToProps = (state) => {
  return {
    dataSource: dataSourceFromOffers(state.offers),
    loading: state.loading.offerwall
  };
};

export default OfferWall = connect(mapStateToProps)(OfferWallLayout);