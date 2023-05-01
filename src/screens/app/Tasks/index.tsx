import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../../components/Header';

export const Tasks = React.memo(() => {
  return (
    <SafeAreaView>
      <Header title="Tasks" />
    </SafeAreaView>
  );
});
