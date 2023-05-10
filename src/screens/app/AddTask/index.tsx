import firestore from '@react-native-firebase/firestore';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useReducer } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { CustomButton, DatePickerItem, Input, Label, Tags, Title } from '../../../components';
import { RootDrawerParamsList, RootTabParamsList } from '../../../constants';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectUser } from '../../../store/userSlice';
import { styles } from './styles';

interface TaskState {
  deadline: Date;
  title: string;
  selectedTag: string;
  titleError: string;
  loading: boolean;
}

export const AddTask = React.memo(() => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamsList & RootTabParamsList>>();

  const user = useAppSelector(selectUser);

  const [event, updateEvent] = useReducer(
    (prev: TaskState, next: Partial<TaskState>) => {
      return { ...prev, ...next };
    },
    {
      deadline: new Date(),
      title: '',
      selectedTag: 'Urgent',
      titleError: '',
      loading: false,
    },
  );

  const updateProp = (prop: keyof TaskState) => (newValue: Date | string) => {
    updateEvent({ [prop]: newValue });
  };

  const reset = () => {
    updateEvent({ deadline: new Date(), title: '', selectedTag: '', titleError: '', loading: false });
  };

  const onSubmit = () => {
    if (!event.title) {
      updateEvent({ titleError: 'Title is a required field' });

      return;
    } else {
      updateEvent({ titleError: '' });
    }

    if (!user) {
      Alert.alert('Please login to add tasks');
      console.error('User not found');
      return;
    }

    if (user) {
      updateEvent({ loading: true });

      const userRef = firestore().collection('Users').doc(user.uid);

      userRef
        .collection('Tasks')
        .add({
          title: event.title,
          deadline: event.deadline,
          tag: event.selectedTag,
          completed: false,
        })

        .then(() => {
          navigation.navigate('Tasks');
        })
        .catch(error => {
          console.log(error);
          Alert.alert(error.message);
        })
        .finally(() => {
          reset();
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backArrow} source={require('../../../assets/backArrow.png')} />
      </TouchableOpacity>

      <ScrollView>
        <Title text="Add New Task" type="tasks" />

        <View style={styles.inputContainer}>
          <Label text="Describe the task" />
          <Input
            value={event.title}
            errorText={event.titleError}
            onChangeText={updateProp('title')}
            placeholder="Type here..."
            type="outlined"
          />
        </View>

        <View style={styles.listContainer}>
          <Label text="Type" />
          <Tags selectedTag={event.selectedTag} selectTag={updateProp('selectedTag')} />
        </View>

        <View style={styles.deadlineContainer}>
          <Label text="Deadline" />
          <DatePickerItem date={event.deadline} setDate={updateProp('deadline')} />
        </View>

        {event.loading ? (
          <ActivityIndicator />
        ) : (
          <CustomButton style={styles.button} onPress={onSubmit}>
            Add the task
          </CustomButton>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});
