import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface TasksTitleProps {
  text: string;
}

export const TasksTitle = React.memo(({ text }: TasksTitleProps) => <Text style={styles.title}>{text}</Text>);
