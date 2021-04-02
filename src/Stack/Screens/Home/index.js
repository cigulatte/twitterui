import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PostDetail from './PostDetail';
import PostList from './PostList';
import TwitterLogo from '../../../icons/Twitterlogo';
import Menuline from '../../../icons/Menuline';
import {Colors, ICON_SIZE, LOGO_SIZE} from '../../../utils/Constants';

import {DrawerActions} from '@react-navigation/native';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="postlist">
      <Stack.Screen
        options={({route, navigation}) => {
          return {
            headerTitle: (props) => (
              <TwitterLogo
                color={Colors.primaryColor}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
              />
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
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lobster-Regular',
              fontSize: 30,
              color: '#000',
            },
            //headerStyle: {shadowColor: 'transparent'},
          };
        }}
        name="postlist"
        component={PostList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="postdetail"
        component={PostDetail}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
