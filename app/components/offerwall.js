import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import { fetchOffers } from '../actions/offers';

import Offer from './offer';

class OfferWallLayout extends Component {
  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(fetchOffers());
  }
  
  render(){
    return (
      <ListView
        dataSource={this.props.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) => (
          <Offer
            id={rowData.id}
            title={rowData.title}
            image={rowData.image}
            points={rowData.points}
            description={rowData.description} />
        )} />
    );
  }
}

const dataSourceFromOffers = (offers) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return ds.cloneWithRows(offers || []);
}

const mapStateToProps = (state) => {
  return {
    dataSource: dataSourceFromOffers(state.offers)
  };
};

export default OfferWall = connect(mapStateToProps)(OfferWallLayout);