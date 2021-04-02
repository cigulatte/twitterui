import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import MainNavigation from './navigation';
import Userline from '../icons/Userline';
import Bookmarkline from '../icons/Bookmarkline';
import Flash from '../icons/Flash';
import Filelist from '../icons/Filelist';
import {Colors, ICON_SIZE} from '../utils/Constants';

function DrawerContent({navigation, props}) {
  const ItemSeparatorComponent = () => <View style={styles.item_seperator} />;

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'grey',
          alignSelf: 'center',
        }}>
        <Image
          source={{
            uri:
              'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 50,
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          margin: 3,
          fontFamily: 'KronaOne-Regular',
          fontSize: 20,
        }}>
        Gicklatt
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flex: 1,
          marginBottom: 10,
        }}>
        <Text style={{color: 'grey'}}>
          <Text style={{fontWeight: '700', fontSize: 16, color: 'black'}}>
            130
          </Text>{' '}
          followers
        </Text>
        <Text style={{color: 'grey'}}>
          <Text style={{fontWeight: '700', fontSize: 16, color: 'black'}}>
            100
          </Text>{' '}
          following
        </Text>
      </View>
      <ItemSeparatorComponent />
      <DrawerItem
        label="Profile"
        icon={() => <Userline width={ICON_SIZE} height={ICON_SIZE} />}
        labelStyle={{fontFamily: 'BreeSerif-Regular', fontSize: 20}}
        style={{margin: 5}}
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer());
          navigation.navigate('profile');
        }}
      />
      <DrawerItem
        label="Lists"
        icon={() => <Filelist width={ICON_SIZE} height={ICON_SIZE} />}
        labelStyle={{fontFamily: 'BreeSerif-Regular', fontSize: 20}}
        style={{margin: 5}}
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer());
          navigation.navigate('profile');
        }}
      />
      <DrawerItem
        label="Bookmarks"
        icon={() => <Bookmarkline width={ICON_SIZE} height={ICON_SIZE} />}
        labelStyle={{fontFamily: 'BreeSerif-Regular', fontSize: 20}}
        style={{margin: 5}}
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer());
          navigation.navigate('profile');
        }}
      />
      <DrawerItem
        label="Moments"
        icon={() => <Flash width={ICON_SIZE} height={ICON_SIZE} />}
        labelStyle={{fontFamily: 'BreeSerif-Regular', fontSize: 20}}
        style={{margin: 5}}
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer());
          navigation.navigate('profile');
        }}
      />
      {/**
     * <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
     */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent props={props} navigation={navigation} />
      )}>
      <Drawer.Screen name="main" component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  item_seperator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: 3,
  },
});
