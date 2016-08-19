import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';

import { loadImages } from '../actions/images';

import GetLikeImage from './getlikeimage';

const GetLikesLayout = React.createClass({
  render(){
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.props.dataSource}
        renderRow={(rowData) => (
          <GetLikeImage
            image_url={rowData.images.thumbnail.url}
            imageWidth={150}
            imageHeight={150} />
        )} />
    );
  },

  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loadImages());
  }
});

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const dataSourceFromImages = (images) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return ds.cloneWithRows(images || []);
}

const mapStateToParams = (state) => {
  return {
    dataSource: dataSourceFromImages(state.images)
  };
};

export default GetLikes = connect(mapStateToParams)(GetLikesLayout);