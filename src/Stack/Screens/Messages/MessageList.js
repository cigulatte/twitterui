import React, {useCallback} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCtx} from '../../../context/Context';
import {Colors, ICON_SIZE} from '../../../utils/Constants';

const MessageList = ({navigation}) => {
  const {
    state: {messages},
  } = useCtx();

  const ItemSeparatorComponent = () => <View style={styles.item_seperator} />;

  const keyExtractor = useCallback((item) => item.key.toString(), []);
  const renderItem = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 5,
          padding: 5,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
          }}>
          <Image
            source={{uri: item.uri}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>{item.username}</Text>
        </View>
        <Text
          style={{color: 'grey', fontSize: 12, flex: 1, margin: 5}}
          numberOfLines={1}>
          {item.message}
        </Text>
        <Text style={{color: 'grey', fontSize: 12, margin: 5}}>
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        showsHorizontalScrollIndicator={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        scrollEventThrottle={16}
        snapToAlignment="start"
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item_seperator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 3,
  },
});
