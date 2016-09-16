import * as colors from './colors';
import { StyleSheet } from 'react-native';

export const containers = StyleSheet.create({
  base: {
    flex: 1
  },
  
  tabbed: {
    marginTop: 60
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const buttons = StyleSheet.create({
  base: {
    borderRadius: 5,
    padding: 5,
    margin: 5
  },

  primary: {
    backgroundColor: colors.accent
  },

  secondary: {
    backgroundColor: colors.secondary
  }
});

export const fonts = StyleSheet.create({
  button: {
    color: 'white'
  }
});