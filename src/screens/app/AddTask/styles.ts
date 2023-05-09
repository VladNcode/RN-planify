import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_SCHEME } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: width * 0.06,
    flex: 1,
  },
  backArrow: {
    height: 36,
    width: 12,
  },
  title: {
    fontSize: 24,
    color: COLOR_SCHEME.black,
    fontWeight: '300',
    marginTop: 42,
  },
  inputContainer: {
    marginTop: 32,
  },
  listContainer: {
    marginTop: 24,
  },
  deadlineContainer: {
    marginTop: 24,
  },
  button: {
    backgroundColor: COLOR_SCHEME.blue,
    marginTop: 43,
  },
});
