import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
import { styles } from './styles';

export const Tasks = React.memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <Title text="To do Tasks" type="tasks" />
      <PlusIcon />
    </SafeAreaView>
  );
});
