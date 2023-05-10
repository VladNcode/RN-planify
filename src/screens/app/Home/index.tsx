import firestore from '@react-native-firebase/firestore';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Header, PlusIcon, StatusCard, Title } from '../../../components';
import { RootTabParamsList } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Task, selectTasks, setFirebaseTasks } from '../../../store/tasksSlice';
import { selectUser } from '../../../store/userSlice';
import { styles } from './styles';

export const Home = React.memo(() => {
  const navigation = useNavigation<DrawerNavigationProp<RootTabParamsList>>();

  const onPress = () => {
    navigation.navigate('Tasks');
  };

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);

  const userRef = firestore().collection('Users').doc(user?.uid);
  const tasksQuery = userRef.collection('Tasks');

  useEffect(() => {
    const subscribe = tasksQuery.onSnapshot(docSnapshot => {
      const tasksArray: Task[] = [];

      docSnapshot.forEach(doc => {
        tasksArray.push({ ...doc.data(), id: doc.id } as Task);
      });

      dispatch(setFirebaseTasks(tasksArray));
    });

    return () => {
      subscribe();
    };
  }, [user]);

  const [counter, setCounter] = useState({
    important: 0,
    dueDeadline: 0,
    todaysTasks: 0,
  });

  useEffect(() => {
    let important = 0;
    let dueDeadline = 0;
    let todaysTasks = 0;

    tasks.forEach(task => {
      if (task.tag === 'Important') important++;
      if (task.tag === `Today's Tasks`) todaysTasks++;
      if (task.deadline.seconds < new Date().getTime() / 1000) dueDeadline++;
    });

    setCounter({ important, dueDeadline, todaysTasks });
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title="Home" />
        <Title text="Daily Tasks:" type="tasks" />
        <View style={styles.row}>
          <StatusCard label="Important" count={counter.important} />
          <StatusCard label="Due deadline" type="error" count={counter.dueDeadline} />
          <StatusCard label="Today's Tasks" count={counter.todaysTasks} />
        </View>

        <TouchableOpacity onPress={onPress} style={styles.allTasks}>
          <Text style={styles.allTasksTitle}>Check all my tasks</Text>
          <Text style={styles.allTasksBody}>
            See all tasks and filter them by categories you have selected when creating them
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
});
