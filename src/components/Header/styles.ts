import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 160,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.header,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.background_secondary
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_detail,
    textAlign: 'right',
    fontSize: 13,
  }
});