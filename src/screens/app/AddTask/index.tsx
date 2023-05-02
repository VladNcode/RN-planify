import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { RootDrawerParamsList } from '../../../constants/navigation.types';
import { styles } from './styles';
import { TasksTitle } from '../../../components/TasksTitle';

export const AddTask = React.memo(() => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamsList>>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backArrow} source={require('../../../assets/backArrow.png')} />
      </TouchableOpacity>
      <TasksTitle text="Add New Task" />
    </SafeAreaView>
  );
});
