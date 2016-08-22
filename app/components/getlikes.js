import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import { loadImages } from '../actions/images';

import GetLikeImage from './getlikeimage';

const GetLikesLayout = React.createClass({
  render(){
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.props.dataSource}
        enableEmptySections={true}
        renderScrollComponent={props => <InfiniteScrollView {...props} />}
        canLoadMore={this.props.canLoadMoreContent}
        onLoadMoreAsync={this.loadMoreContentAsync}
        renderRow={(rowData) => (
          <GetLikeImage
            image_url={rowData.images.thumbnail.url}
            image_width={150}
            image_height={150}
            media_id={rowData.id} />
        )} />
    );
  },

  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loadImages());
  },

  loadMoreContentAsync(){
    let { dispatch, last_media_id } = this.props;
    dispatch(loadImages(last_media_id));
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
    last_media_id: state.images.images.length > 0 ? state.images.images[state.images.images.length - 1].id : null,
    dataSource: dataSourceFromImages(state.images.images),
    canLoadMoreContent: state.images.canLoadMore
  };
};

export default GetLikes = connect(mapStateToParams)(GetLikesLayout);