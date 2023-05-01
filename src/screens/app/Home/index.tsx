import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../../components/Header';

export const Home = React.memo(() => {
  return (
    <SafeAreaView>
      <Header title="Home" />
    </SafeAreaView>
  );
});
