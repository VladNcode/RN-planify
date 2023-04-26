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
  },
});
