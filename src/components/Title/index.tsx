import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface InputProps {
  text: string;
}

export const Title = React.memo(({ text }: InputProps) => <Text style={styles.title}>{text}</Text>);
