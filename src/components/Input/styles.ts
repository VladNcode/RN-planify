import { StyleSheet } from 'react-native';

import { COLOR_SCHEME } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLOR_SCHEME.lightGray,
    paddingHorizontal: 24,
    paddingVertical: 13,
  },
  input: {
    paddingVertical: 0,
    color: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  outlined: {
    backgroundColor: COLOR_SCHEME.white,
    borderWidth: 1,
    borderColor: COLOR_SCHEME.black,
  },
});
