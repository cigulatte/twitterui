import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCtx} from '../../../context/Context';
import Moreline from '../../../icons/Moreline';
import {Colors, WIDTH} from '../../../utils/Constants';

const SearchMain = () => {
  const {
    state: {searchdata},
  } = useCtx();

  const ItemSeparatorComponent = () => <View style={styles.item_seperator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={searchdata}
        ListHeaderComponent={() => {
          return (
            <View>
              <View
                style={{
                  width: WIDTH,
                  height: WIDTH * 0.75,
                  backgroundColor: 'grey',
                }}>
                <Image
                  source={{
                    uri:
                      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e751a62d-14c0-49e7-aa4d-441266686c72/dcp6tlt-d798eab1-7dca-4d31-8872-0cc5a4765bef.jpg/v1/fill/w_1024,h_1628,q_75,strp/the_daily_prophet___hp_by_asha47110_dcp6tlt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNjI4IiwicGF0aCI6IlwvZlwvZTc1MWE2MmQtMTRjMC00OWU3LWFhNGQtNDQxMjY2Njg2YzcyXC9kY3A2dGx0LWQ3OThlYWIxLTdkY2EtNGQzMS04ODcyLTBjYzVhNDc2NWJlZi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0uXmV3Mn7eVw_pgsJNpM8sAJlE-eM9D3G1zuakQbGoU',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 24,
                  margin: 5,
                  fontWeight: '800',
                }}>
                Trends for You
              </Text>
              <ItemSeparatorComponent />
            </View>
          );
        }}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsHorizontalScrollIndicator={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        scrollEventThrottle={16}
        ListFooterComponent={() => (
          <View>
            <ItemSeparatorComponent />
            <TouchableOpacity style={{margin: 10}}>
              <Text
                style={{
                  color: Colors.primaryColor,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        )}
        /* onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}*/
        // snapToInterval={ITEM_SIZE}
        //snapToAlignment="start"
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'BreeSerif-Regular',
                    fontSize: 18,
                    margin: 5,
                  }}>
                  {index + 1}
                </Text>
                <View
                  style={{
                    margin: 5,
                  }}>
                  <Text style={{fontFamily: 'BreeSerif-Regular', fontSize: 18}}>
                    {item.tag}
                  </Text>
                  {item.tweets ? (
                    <Text style={{color: 'grey', fontSize: 12, margin: 2}}>
                      {item.tweets}
                    </Text>
                  ) : null}
                </View>
              </View>
              <View style={{margin: 5}}>
                <TouchableOpacity style={{padding: 5}}>
                  <Moreline
                    color={Colors.secondaryColor}
                    width={24}
                    height={24}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SearchMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  item_seperator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 3,
  },
});
