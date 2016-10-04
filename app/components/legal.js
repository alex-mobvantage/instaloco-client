import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import NavBar from './navbar';

import * as commonStyles from '../styles/common';
import * as colors from '../styles/colors';

class LegalLayout extends Component {
  render(){
    return (
      <View style={[commonStyles.containers.base, commonStyles.containers.centered, styles.container]}>
        <ScrollView style={styles.scrollView}>
          <Text style={commonStyles.fonts.base}>InstaLoco® is a web service owned and operated by Mobvantage Marketing Ltd. ( hereinafter “InstaLoco”, the “Site”, the "Service", or the “System”). These terms govern your use of InstaLoco; by using the Service you agree to the terms below. If you do not agree with any part of these terms, or our privacy policy, you may not use the Site.</Text>
          
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Privacy Policy</Text>
          <Text style={commonStyles.fonts.base}>Your privacy is important to us. If you provide InstaLoco with any personal information, such as email, Instagram username, device ID, or any other electronic means of identification while using the Site, InstaLoco may use your personal information to send important notices, track activity, award credits known as ‘coins’ for activity or send communications about purchases or downloads as well as changes to our terms, conditions, and policies. The data we collect may includes, but is not limited to: contact information (including email address); state; country; age. If you provide us with your email address, we will not share your email address with any third parties excluding select email management partners, for the sole purpose of analysis, management of email messages, and distributing first party emails including, but not limited to: notifications about special offers; redemption notifications; reminders to perform activities; new feature updates or upgrade notifications. </Text>
        
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Data Security</Text>
          <Text style={commonStyles.fonts.base}>We are committed to ensuring that your information is secure and protected. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. We have implemented reasonable security measures in order to protect your information from loss, misuse and unauthorized access, disclosure, alteration or destruction. While we cannot guarantee that loss, misuse or alteration to data will not occur; we make good faith efforts to prevent such occurrences. We do not warrant or represent that your account or any of your information or end user information will be protected against, loss, misuse, or alteration by third parties.</Text>
        
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Content</Text>
          <Text style={commonStyles.fonts.base}>All text, graphics, user interface, trademarks, logos, sounds, music, artwork and computer code (collectively “Content”), including but not limited to the ‘look and feel’ and arrangement of such Content, contained on this Site is owned and controlled by InstaLoco, or its respective owners, and is protected by copyright and other intellectual property rights and unfair competition laws. No part of the Content may be copied, reproduced, or distributed in any way to any other computer, server, website or other medium without InstaLoco; explicit prior written consent. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Rewards</Text>
          <Text style={commonStyles.fonts.base}>Any credits such as ‘coins’ earned in InstaLoco are not redeemable for cash and cannot be exchanged, resold, or returned for a cash refund (except as required by law). Unused balances are not transferable.</Text>
        
          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Limitation of Liability</Text>
          <Text style={commonStyles.fonts.base}>InstaLoco and its licensors, or its affiliates are not liable for any act, or failure to act by them, or any other party regarding conduct, communication, or content on the Site or Service, and are not responsible for: (i) any incorrect or inaccurate information, printing errors, or by any of the equipment or programming associated with or utilized in the the Site; (ii) technical failures of any kind, including but not limited to malfunctions, interruptions, traffic congestion, or disconnections in phone lines, internet connections, network hardware or software; (iii) unauthorized human intervention in any part of the Site or Service process; (iv) technical or human error which may occur in the administration of the Site or the processing of account credits; (v) any injury or damage to persons or property which may be caused directly or indirectly, in whole or in part, through the use or misuse of the Site. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>User Conduct</Text>
          <Text style={commonStyles.fonts.base}>You agree to use the Site or Service at your own risk, and indemnify and hold harmless the Site, its licensors, affiliates, employees, officers, and directors from all claims for liabilities, losses and expenses, including reasonable attorney fees, from third parties arising from such use. The use of any automated systems or any other means in attempting to hack, intercept or decipher any transmissions to or from the servers used by the Site is strictly prohibited. You agree not to intentionally or unintentionally violate any applicable local, state, national or foreign laws, including but not limited to any regulations having the force of law while using or accessing the Site or Service. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Requirements for Use</Text>
          <Text style={commonStyles.fonts.base}>The Site is not directed to children under the age of 13 and is only available for individuals aged 13 years or older. We do not knowingly collect or solicit personally identifiable information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information from our System. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Warranty</Text>
          <Text style={commonStyles.fonts.base}>This Site and/or Service are provided on an "as is" and "as available" basis for your use, without warranties of any kind, either expressed or implied. Your use of the Site and any Service provided by or made accessible through the Site is at your own discretion and risk. You are solely responsible for any damage to your device(s), or loss of data that results from such use.</Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Termination</Text>
          <Text style={commonStyles.fonts.base}>InstaLoco may terminate your right to use the Site and/or Service immediately, without notice to you, if, in our sole discretion, you fail to comply with any of these terms of use or engage in any fraudulent, criminal or other unauthorized activity. InstaLoco reserves the right to terminate your access to the Site and/or Service for any reason at any time without prior notice. Your account will be reset and terminated due to inactivity. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Inactivity</Text>
          <Text style={commonStyles.fonts.base}>InstaLoco may terminate any points or credits assigned to your account due to 'Inactivity' within a sixty (60) day period. 'Inactivity' includes, but is not limited to: (i) no point activity, where no points have been credited or redeemed; (ii) no new referral sign-ups added using your referral code; (iii) no attempts to access the Service. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Release</Text>
          <Text style={commonStyles.fonts.base}>By using the Site and/or Services you agree to release and hold harmless InstaLoco and its subsidiaries, affiliates, suppliers, distributors, advertising/promotion agencies and each such companies, officers, directors, employees and agents (collectively the "Released Parties") from and against any claim or cause of action, including, but not limited to, personal injury, death, or damage to or loss of property, arising out of participation in the use of the Site or receipt or use or misuse of any points or participation in any Site-related activity and for any claims based on publicity rights, defamation, invasion of privacy, or merchandise delivery. </Text>

          <Text style={[commonStyles.fonts.base, commonStyles.fonts.bold, commonStyles.fonts.header, styles.sectionHeader]}>Changes to this Agreement</Text>
          <Text style={commonStyles.fonts.base}>InstaLoco reserves the right at any time to modify this agreement and to impose new or additional terms, conditions, or policies on your use of the Site. Such modifications and additional terms will be effective immediately and incorporated into this agreement. Your continued use of the Site will be deemed acceptance thereof.</Text>

          <Text style={[commonStyles.fonts.base, {marginTop: 12}]}>If you have any questions, complaints, or comments regarding these terms, please contact us at support@instaloco.com. We hope you enjoy using the InstaLoco service.</Text>
        </ScrollView>
      </View>
    );
  }

  static renderNavigationBar(navProps){
    return <NavBar {...navProps} title='Legal' />;
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
  }
});

export default Legal = connect()(LegalLayout);