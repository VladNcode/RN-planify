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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  allTasks: {
    marginTop: 72,
    padding: 22,
    backgroundColor: COLOR_SCHEME.lightGray,
    borderRadius: 15,
  },
  allTasksTitle: {
    fontSize: 16,
    color: COLOR_SCHEME.black,
  },
  allTasksBody: {
    marginTop: 12,
    fontSize: 12,
    color: COLOR_SCHEME.darkGray,
  },
});
