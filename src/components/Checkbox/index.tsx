import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

interface CheckboxProps {
  agreed: boolean;
  setAgreed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox = React.memo(({ agreed, setAgreed }: CheckboxProps) => {
  const onPress = () => {
    setAgreed(value => !value);
  };

  return (
    <Pressable onPress={onPress} style={[styles.container, agreed && styles.checked]}>
      {agreed && <View style={styles.innerSquare} />}
    </Pressable>
  );
});
