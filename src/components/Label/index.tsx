import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface LabelProps {
  text: string;
  type?: 'tasks' | 'auth';
}

export const Label = React.memo(({ text }: LabelProps) => <Text style={styles.label}>{text}</Text>);
