import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Addline from '../icons/Addline';
import {Colors, STORIES_ITEM_SIZE} from '../utils/Constants';

const StoryItem = ({item, selectedIndex, setSelected, index}) => {
  const itemSelect = () => {
    setSelected(index);
  };

  return (
    <TouchableOpacity
      style={styles.list_item}
      onPress={itemSelect}
      activeOpacity={0.8}>
      <View style={index !== 0 ? styles.item_border : styles.item_container}>
        <Image
          source={{
            uri: item.url,
            width: STORIES_ITEM_SIZE,
            height: STORIES_ITEM_SIZE,
          }}
          style={{borderRadius: 50}}
        />
        {index === 0 ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#3490de',
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 50,
            }}>
            <Addline color={'#fff'} width={14} height={14} />
          </View>
        ) : null}
      </View>
      <Text style={styles.list_item_text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  list_item: {
    margin: 2,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_item_text: {
    fontFamily: 'BreeSerif-Regular',
    fontSize: 14,
    color: 'grey',
  },
  item_border: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.primaryColor,
    padding: 3,
  },

  item_container: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'grey',
    margin: 4,
  },
});
