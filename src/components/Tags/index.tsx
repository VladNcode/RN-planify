import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { styles } from './styles';

export const Tags = React.memo(
  ({ selectTag, selectedTag }: { selectTag: (tag: string) => void; selectedTag: string }) => {
    const tags = [
      { label: 'Quick Task', value: 'quickTask' },
      { label: 'Urgent', value: 'urgent' },
      { label: 'Important', value: 'important' },
      { label: "Today's Tasks", value: 'todaysTasks' },
    ];

    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={tags}
          renderItem={({ item: { label }, index }) => (
            <Pressable
              onPress={() => {
                selectTag(label);
              }}
              style={[styles.tag, index === 0 && styles.firstTag, label === selectedTag && styles.selected]}>
              <Text style={styles.tagText}>{label}</Text>
            </Pressable>
          )}
          keyExtractor={({ label }) => String(label)}
        />
      </View>
    );
  },
);
