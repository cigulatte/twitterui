import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Mentions from './Mentions';
import AllNotifications from './AllNotifications';

const TopTab = createMaterialTopTabNavigator();

const All = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="all" component={AllNotifications} />
      <TopTab.Screen name="mentions" component={Mentions} />
    </TopTab.Navigator>
  );
};

export default All;

const styles = StyleSheet.create({});
