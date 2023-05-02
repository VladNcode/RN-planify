import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../../../components/Header';
import { styles } from './styles';
import { TasksTitle } from '../../../components/TasksTitle';
import { PlusIcon } from '../../../components/PlusIcon';

export const Tasks = React.memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <TasksTitle text="To do Tasks" />
      <PlusIcon />
    </SafeAreaView>
  );
});
