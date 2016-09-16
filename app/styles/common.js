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
    borderRadius: 8,
    margin: 5,
    height: 35,
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

  button: {
    color: 'white',
    fontWeight: '400'
  }
});