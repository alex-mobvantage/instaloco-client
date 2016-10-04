import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import NavBar from './navbar';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class FAQLayout extends Component {
  render(){
    let { coins_per_like, coins_per_follower } = this.props;

    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <ScrollView style={styles.scrollView}>
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Does InstaLoco store my Instagram account details?</Text>
          <Text style={commonStyles.fonts.base}>Absolutely not! We will never take your Instagram username or password on record. This is all handled through Instagram, not InstaLoco.</Text>
        
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>There’s no more photos or accounts to follow :(</Text>
          <Text style={commonStyles.fonts.base}>Don’t worry! There are always more photos coming in everyday for you to earn coins.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>The fastest and easiest way to get more free likes is to go to the ‘Free Coins’ tab. By downloading free apps you can earn hundreds of coins to get hundreds of likes & followers!!! There are always apps available to download here.</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>How Do I Get Coins?</Text>
          <Text style={commonStyles.fonts.base}>There are 3 ways to get coins.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>1) Like photos & follow other instagram accounts on the ‘Get Likes’ tab. Easy :) This gives you {coins_per_like} coins for each photo you like, and {coins_per_follower} coins for every Instagram account you follow.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>2) You can earn coins really fast by downloading apps that are shown on the ‘Free Coins’ tab. There’s new apps everyday to earn coins so don’t forget to look everyday!</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>3) You can buy coins! On the ‘Earn Coins’ tab, hit the button where it says ‘Click here to get coins faster!’</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>How come I never received any coins from downloading apps?</Text>
          <Text style={commonStyles.fonts.base}>1) Spend enough time on the sponsored app: We suggest to spend at least 5 minutes testing out the app. Each app differs in the amount of time you need to spend, but you should be good to go after 5 minutes.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>2) Time delay in the payout: Even though you have spent 5 minutes on the app, sometimes the coins won’t arrive immediately. Again, each app differs in the time to payout - and we have seen some apps take up to 24 hours for some apps to pay users out.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>3) Previously installed app: Any app that previously has been installed on your device will unfortunately not give you any coins.</Text>
          <Text style={[commonStyles.fonts.base, styles.paragraph]}>4) Unfortunately it is up to the sponsored app to let us know that you have downloaded the sponsored app. There can be the case where a technical error causes a break in the communication between us and the sponsor, and the user may not receive their coins. We suggest to start at the top of our apps page, and slowly work your way down. The apps on the top are the most likely to pay out the coins the fastest.</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Can I delete an app after receiving coins?</Text>
          <Text style={commonStyles.fonts.base}>Yes! Once you have received your coins for downloading an app on the ‘Free Coins’ tab, you can delete it and your coins will remain the same :)</Text>
        </ScrollView>
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='FAQ' />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  scrollView: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 50
  },
  sectionHeader: {
    paddingTop: 12,
    paddingBottom: 12
  },
  paragraph: {
    paddingTop: 12
  }
});

const mapStateToProps = (state) => {
  return {
    coins_per_like: state.config.coins_per_like,
    coins_per_follower: state.config.coins_per_follower
  };
};

export default FAQ = connect(mapStateToProps)(FAQLayout);