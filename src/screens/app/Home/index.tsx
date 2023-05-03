import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
import { HomeNavigationProp, HomeRoute } from '../../../constants/navigation.types';
import { styles } from './styles';

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRoute;
}

export const Home = React.memo(({ navigation, route }: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title="Home" />
        <Title text="Daily Tasks:" type="tasks" />
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
});
