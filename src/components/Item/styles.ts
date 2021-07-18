import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.shape,
    marginBottom: 7,
    padding: 15
  },
  text: {
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.header,
  }
});