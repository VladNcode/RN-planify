import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, Text, View } from 'react-native';

import { Checkbox } from '../../../components/Checkbox';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Tags } from '../../../components/Tags';
import { Title } from '../../../components/Title';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { Task, selectTasks } from '../../../store/tasksSlice';
import { selectUser } from '../../../store/userSlice';
import { styles } from './styles';

export const Tasks = React.memo(() => {
  const tasks = useAppSelector(selectTasks);
  const user = useAppSelector(selectUser);

  const userRef = firestore().collection('Users').doc(user?.uid);
  const tasksQuery = userRef.collection('Tasks');

  const [selectedTag, setSelectedTag] = useState<string>('');

  const renderTask = ({ item }: ListRenderItemInfo<Task>) => {
    const toggleCompleted = () => {
      tasksQuery.doc(item.id).update({ completed: !item.completed });
    };

    return (
      <View style={styles.taskContainer}>
        <Checkbox checked={item.completed} setChecked={toggleCompleted} />
        <Text style={[styles.taskText, item.completed && styles.completed]}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <FlatList
        ListEmptyComponent={<Text style={styles.noTasks}>No tasks found!</Text>}
        ListHeaderComponent={
          <>
            <Title text="To do Tasks" type="tasks" />
            <View style={{ marginVertical: 10 }} />
            <Tags selectedTag={selectedTag} selectTag={setSelectedTag} />
          </>
        }
        keyExtractor={item => item.title}
        data={!selectedTag ? tasks : tasks.filter(task => task.tag === selectedTag)}
        renderItem={renderTask}
      />
      <PlusIcon />
    </SafeAreaView>
  );
});
