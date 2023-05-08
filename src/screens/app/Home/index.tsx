import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
import { HomeNavigationProp, HomeRoute } from '../../../constants/navigation.types';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { selectUser } from '../../../store/userSlice';
import { styles } from './styles';
import { Task, selectTasks, setFirebaseTasks } from '../../../store/tasksSlice';

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRoute;
}

export const Home = React.memo(({ navigation, route }: HomeProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const userRef = firestore().collection('Users').doc(user?.uid);
  const tasksQuery = userRef.collection('Tasks');

  useEffect(() => {
    const subscribe = tasksQuery.onSnapshot(docSnapshot => {
      const tasksArray: Task[] = [];

      docSnapshot.forEach(doc => {
        tasksArray.push(doc.data() as Task);
      });

      dispatch(setFirebaseTasks(tasksArray));
      console.log('Tasks updated :>>>>\n', tasksArray);
    });

    return () => {
      subscribe();
    };
  }, [user]);

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
