import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';

import { Header } from '../../../components/Header';
import { HomeNavigationProp, HomeRoute } from '../../../constants/navigation.types';
import { PlusIcon } from '../../../components/PlusIcon';
import { styles } from './styles';
import { TasksTitle } from '../../../components/TasksTitle';

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRoute;
}

export const Home = React.memo(({ navigation, route }: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title="Home" />
        <TasksTitle text={`Welcome ${route.params.user.displayName}!`} />
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
});
