import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';

const Stack = createStackNavigator();

const AppStack = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name="homestack"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name="profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
