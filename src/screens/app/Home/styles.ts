import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_SCHEME } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: width * 0.06,
  },
  title: {
    fontSize: 24,
    color: COLOR_SCHEME.black,
    fontWeight: '300',
    marginTop: 42,
  },
});
