import React from 'react';
import { View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLOR_SCHEME } from '../../constants/colors';
import { styles } from './styles';

interface InputProps {
  style?: ViewStyle;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export const Input = React.memo(({ style = {}, placeholder = 'Search recipe', onChangeText }: InputProps) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor={COLOR_SCHEME.gray}
        placeholder={placeholder}
      />
    </View>
  );
});
