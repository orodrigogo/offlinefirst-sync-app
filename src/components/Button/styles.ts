import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
    backgroundColor: theme.colors.main,
    marginHorizontal: 24
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.shape
  }
});