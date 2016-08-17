import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

class MainViewLayout extends Component {
  render(){
    return (
      <ScrollableTabView tabBarPosition='bottom'>
        <View tabLabel='Earn coins' style={styles.view}>
          <Text style={styles.text}>Earn coins</Text>
        </View>
        <View tabLabel='Get Likes' style={styles.view}>
          <Text style={styles.text}>Get likes</Text>
        </View>
        <View tabLabel='Get followers' style={styles.view}>
          <Text style={styles.text}>Get followers</Text>
        </View>
        <View tabLabel='Free coins' style={styles.view}>
          <Text style={styles.text}>Free coins</Text>
        </View>
        <View tabLabel='More' style={styles.view}>
          <Text style={styles.text}>More</Text>
        </View>
      </ScrollableTabView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#000000'
  },
  view: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MainView = connect()(MainViewLayout);
