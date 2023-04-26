import { Dimensions, StyleSheet } from 'react-native';

import { COLOR_SCHEME } from '../../../constants/colors';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: width * 0.06,
    marginTop: height * 0.1,
  },
  inputsContainer: {
    marginTop: 36,
  },
  input: {
    marginTop: 24,
  },
  button: {
    backgroundColor: COLOR_SCHEME.blue,
    marginTop: 24,
  },
});
