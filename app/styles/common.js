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
  }
});

export const buttons = StyleSheet.create({
  base: {
    borderRadius: 5,
    margin: 5,
    height: 30,
    justifyContent: 'center'
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