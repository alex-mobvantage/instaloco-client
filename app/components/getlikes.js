import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';

const GetLikesLayout = React.createClass({
  getInitialState(){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = Array.apply(null, {length: 1000}).map(Number.call, Number);
    return {
      dataSource: ds.cloneWithRows(data)
    };
  },

  render(){
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>} />
    );
  }
});

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 150,
    height: 150
  }
});

export default GetLikes = connect()(GetLikesLayout);