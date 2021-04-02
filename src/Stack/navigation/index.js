import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homefill from '../../icons/Homefill';
import Homeline from '../../icons/Homeline';
import Searchline from '../../icons/Searchline';
import Notificationfill from '../../icons/Notificationfill';
import Notificationline from '../../icons/Notificationline';
import Messagefill from '../../icons/Messagefill';
import Messageline from '../../icons/Messageline';
import {Colors} from '../../utils/Constants';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Notifications from '../Screens/Notifications/index';
import Messages from '../Screens/Messages';

const BottomBar = createBottomTabNavigator();

const MainNavigation = ({navigation}) => {
  return (
    <BottomBar.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            return focused ? (
              <Homefill color={color} width={size} height={size} />
            ) : (
              <Homeline color={color} width={size} height={size} />
            );
          } else if (route.name === 'search') {
            return focused ? (
              <Searchline color={color} width={size} height={size} />
            ) : (
              <Searchline color={color} width={size} height={size} />
            );
          } else if (route.name === 'notifications') {
            return focused ? (
              <Notificationfill color={color} width={size} height={size} />
            ) : (
              <Notificationline color={color} width={size} height={size} />
            );
          } else if (route.name === 'messages') {
            return focused ? (
              <Messagefill color={color} width={size} height={size} />
            ) : (
              <Messageline color={color} width={size} height={size} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.secondaryColor,
        showLabel: false,
      }}>
      <BottomBar.Screen name="home" component={Home} />
      <BottomBar.Screen name="search" component={Search} />
      <BottomBar.Screen name="notifications" component={Notifications} />
      <BottomBar.Screen name="messages" component={Messages} />
    </BottomBar.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
