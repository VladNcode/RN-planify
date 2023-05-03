import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Label } from '../../../components/Label';
import { Tags } from '../../../components/Tags';
import { Title } from '../../../components/Title';
import { RootDrawerParamsList } from '../../../constants/navigation.types';
import { styles } from './styles';

export const AddTask = React.memo(() => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamsList>>();

  const onPress = () => {
    console.log('pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backArrow} source={require('../../../assets/backArrow.png')} />
      </TouchableOpacity>

      <Title text="Add New Task" type="tasks" />

      <View style={styles.inputContainer}>
        <Label text="Describe the task" />
        <Input placeholder="Type here..." type="outlined" />
      </View>

      <View style={styles.listContainer}>
        <Label text="Type" />
        <Tags />
      </View>

      <View style={styles.deadlineContainer}>
        <Label text="Deadline" />
      </View>

      <CustomButton style={styles.button} onPress={onPress}>
        Add the task
      </CustomButton>
    </SafeAreaView>
  );
});
