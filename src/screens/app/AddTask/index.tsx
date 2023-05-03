import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { RootDrawerParamsList } from '../../../constants/navigation.types';
import { styles } from './styles';
import { Title } from '../../../components/Title';

export const AddTask = React.memo(() => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamsList>>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backArrow} source={require('../../../assets/backArrow.png')} />
      </TouchableOpacity>
      <Title text="Add New Task" type="tasks" />
    </SafeAreaView>
  );
});
