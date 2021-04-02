import React, {useCallback} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {useCtx} from '../../../context/Context';
import Retweetline from '../../../icons/Retweet';
import Likefill from '../../../icons/Likefill';
import {Colors, ICON_SIZE} from '../../../utils/Constants';

const AllNotifications = () => {
  const {
    state: {notificationdata},
  } = useCtx();

  const ItemSeparatorComponent = () => <View style={styles.item_seperator} />;

  const keyExtractor = useCallback((item) => item.key.toString(), []);
  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1, margin: 5, alignItems: 'flex-end'}}>
          {item.liked ? (
            <Likefill
              color={Colors.likeColor}
              width={ICON_SIZE * 1.4}
              height={ICON_SIZE * 1.4}
            />
          ) : (
            <Retweetline
              color={Colors.rtColor}
              width={ICON_SIZE * 1.4}
              height={ICON_SIZE * 1.4}
            />
          )}
        </View>

        <View style={{flex: 8, margin: 5}}>
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
          {item.liked ? (
            <View>
              <Text>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  {item.username}
                </Text>{' '}
                liked your tweet
              </Text>
            </View>
          ) : (
            <View>
              <Text>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  {item.username}
                </Text>{' '}
                retweet your tweet
              </Text>
            </View>
          )}
          <Text style={{color: 'grey', fontSize: 12}}>{item.tweet}</Text>
        </View>
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={notificationdata}
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

export default AllNotifications;

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
