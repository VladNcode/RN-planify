import { Dimensions, StyleSheet } from 'react-native';
import { COLOR_SCHEME } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: COLOR_SCHEME.blue,
    position: 'absolute',
    bottom: height * 0.02,
    right: width * 0.06,
  },
  plus: {
    fontSize: 30,
    marginTop: -3,
    marginLeft: 1,
    color: COLOR_SCHEME.white,
    fontWeight: '600',
  },
});
