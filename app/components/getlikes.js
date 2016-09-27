import React from 'react';
import { ActivityIndicator, Dimensions, ListView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import SGListView from 'react-native-sglistview';
import StaticContainer from 'react-static-container';
import _ from 'lodash';

import { loadImages } from '../actions/images';

import Spinner from './spinner';
import GetLikeImage from './getlikeimage';

import * as commonStyles from '../styles/common';

const GetLikesLayout = React.createClass({
  componentDidMount(){
    this.loadImages();
  },

  componentWillUpdate(props, state){
    if (props.active && props.images.length === 0 && !props.loading){
      this.loadImages();
    }
  },

  render(){
    let image_width = Dimensions.get('window').width / 3;
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.tabbed]}>
        <SGListView
          contentContainerStyle={styles.list}
          dataSource={this.props.dataSource}
          enableEmptySections={true}
          renderScrollComponent={props => (
            <InfiniteScrollView
              {...props}
              distanceToLoadMore={1} />
          )}
          canLoadMore={this.props.canLoadMoreContent}
          onLoadMoreAsync={this.loadMoreContentAsync}
          removeClippedSubviews
          initialListSize={18}
          stickyHeaderIndices={[]}
          onEndReachedThreshold={image_width * 4}
          scrollRenderAheadDistance={image_width * 4}
          pageSize={3}
          renderRow={(rowData) => (
            <StaticContainer>
              <GetLikeImage
                image_url={rowData.fullsize}
                thumbnail_url={rowData.thumbnail}
                image_width={image_width}
                image_height={image_width}
                media_id={rowData.id}
                likes={rowData.likeCount}
                style={{overflow: 'hidden'}} />
              </StaticContainer>
          )} />
        {this.props.loading && <Spinner />}
        </View>
    );
  },

  loadMoreContentAsync(){
    let { dispatch, last_media_id } = this.props;
    dispatch(loadImages(last_media_id));
  },

  loadImages(){
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
    last_media_id: state.images.images.length > 0 ? state.images.images[state.images.images.length - 1].id : null,
    dataSource: dataSourceFromImages(state.images.images),
    images: state.images.images,
    canLoadMoreContent: state.images.canLoadMore && !state.loading.getLikes,
    loading: state.loading.getLikes,
    active: state.nav.mainTab === 'getLikes'
  };
};

export default GetLikes = connect(mapStateToParams)(GetLikesLayout);