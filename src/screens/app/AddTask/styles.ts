import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_SCHEME } from '../../../constants/colors';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: width * 0.06,
    marginTop: height * 0.1,
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
});
