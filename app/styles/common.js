import * as colors from './colors';
import { StyleSheet } from 'react-native';

export const containers = StyleSheet.create({
  base: {
    flex: 1
  },
  
  tabbed: {
    marginTop: 64
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  list: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: colors.secondary,
    alignSelf: 'stretch',
    marginTop: 30
  },

  listItem: {
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12
  }
});

export const buttons = StyleSheet.create({
  base: {
    borderRadius: 5,
    margin: 5,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },

  primary: {
    backgroundColor: colors.accent
  },

  secondary: {
    backgroundColor: colors.secondary
  }
});

export const fonts = StyleSheet.create({
  base: {
    fontFamily: 'Helvetica Neue'
  },

  header: {
    fontSize: 16
  },

  button: {
    fontSize: 14,
    fontWeight: '400'
  },

  primaryButton: {
    color: 'white'
  },

  secondaryButton: {
    color: 'black'
  }
});