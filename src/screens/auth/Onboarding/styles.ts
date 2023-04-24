import { StyleSheet } from 'react-native';
import { COLOR_SCHEME } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLOR_SCHEME.white,
    marginTop: '130%',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR_SCHEME.black,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: COLOR_SCHEME.gray,
    textAlign: 'center',
    marginTop: 16,
    maxWidth: '80%',
  },
  buttonsContainer: {
    width: '80%',
    marginTop: 40,
  },
  bottomButton: {
    marginTop: 16,
    backgroundColor: COLOR_SCHEME.blue,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
