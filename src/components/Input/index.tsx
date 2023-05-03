import React from 'react';
import { Text, TextInputProps, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLOR_SCHEME } from '../../constants/colors';
import { styles } from './styles';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  errorText?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  type?: 'outlined';
}

export const Input = React.memo(
  ({ errorText = '', style = {}, type, placeholder = 'Search...', onChangeText, ...rest }: InputProps) => {
    return (
      <View
        style={[styles.container, style, !!errorText && styles.errorBorder, type === 'outlined' && styles.outlined]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholderTextColor={COLOR_SCHEME.darkGray}
          placeholder={placeholder}
          {...rest}
        />
        {errorText && <Text style={styles.errorText}>{errorText}</Text>}
      </View>
    );
  },
);
