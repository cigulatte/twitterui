import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Menuline from '../../../icons/Menuline';
import {Colors, ICON_SIZE, LOGO_SIZE, WIDTH} from '../../../utils/Constants';

import {DrawerActions} from '@react-navigation/native';
import Settingsline from '../../../icons/Settings';
import All from './All';
import Mentions from './Mentions';
import Mention from './Mention';

const Stack = createStackNavigator();

const Notifications = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="postlist">
      <Stack.Screen
        options={({route, navigation}) => {
          return {
            headerTitle: (props) => (
              <View>
                <Text style={{fontWeight: '700', fontSize: 16}}>
                  Notifications
                </Text>
              </View>
            ),
            headerLeft: (props) => (
              <TouchableOpacity
                style={{padding: 5, marginLeft: 3}}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <Menuline
                  color={Colors.primaryColor}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
              </TouchableOpacity>
            ),
            headerRight: (props) => (
              <TouchableOpacity
                style={{padding: 5, marginRight: 3}}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <Settingsline
                  color={Colors.primaryColor}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lobster-Regular',
              fontSize: 30,

              color: '#000',
            },
            //headerStyle: {shadowColor: 'transparent'},
          };
        }}
        name="allnotifications"
        component={All}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="mention"
        component={Mention}
      />
    </Stack.Navigator>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
