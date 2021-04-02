import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useCtx} from '../context/Context';
import StoryItem from './StoryItem';

const Stories = () => {
  const {
    state: {storiesdata},
  } = useCtx();

  const [selectedIndex, setSelected] = useState(0);

  const renderItem = useCallback(
    ({item, index}) => (
      <StoryItem
        item={item}
        selectedIndex={selectedIndex}
        setSelected={setSelected}
        index={index}
      />
    ),
    [selectedIndex, setSelected],
  );

  const keyExtractor = useCallback((item) => item.key.toString(), []);

  return (
    <View style={styles.stories_container}>
      <View style={styles.list_container}>
        <FlatList
          data={storiesdata}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories_container: {
    backgroundColor: 'white',
    display: 'flex',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  list_container: {
    margin: 0,
    padding: 0,
  },
});
