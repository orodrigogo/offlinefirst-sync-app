import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: -27,
    backgroundColor: theme.colors.background_primary,
    marginHorizontal: 24
  },
  button: {
    height: 56,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main
  },
  text: {
    flex: 1,
    height: 56,
    backgroundColor: theme.colors.background_secondary,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    padding: 15,
  }
});