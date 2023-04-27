import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

export const Checkbox = React.memo(() => {
  const [selected, setSelected] = useState(false);

  const onPress = () => {
    setSelected(value => !value);
  };

  return (
    <Pressable onPress={onPress} style={[styles.container, selected && styles.checked]}>
      {selected && <View style={styles.innerSquare} />}
    </Pressable>
  );
});
