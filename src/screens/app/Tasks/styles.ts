import { Dimensions, StyleSheet } from 'react-native';
import { COLOR_SCHEME } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: width * 0.06,
  },
  taskContainer: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: COLOR_SCHEME.black,
    marginLeft: 8,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  noTasks: {
    fontSize: 20,
    color: COLOR_SCHEME.black,
    marginTop: 24,
  },
  marginView: {
    marginVertical: 12,
  },
});
