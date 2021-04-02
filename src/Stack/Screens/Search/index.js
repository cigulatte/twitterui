import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TwitterLogo from '../../../icons/Twitterlogo';
import Menuline from '../../../icons/Menuline';
import {Colors, ICON_SIZE, LOGO_SIZE, WIDTH} from '../../../utils/Constants';

import {DrawerActions} from '@react-navigation/native';
import SearchMain from './SearchMain';
import SearchItemDetail from './SearchItemDetail';
import Searchline from '../../../icons/Searchline';
import Settingsline from '../../../icons/Settings';

const Stack = createStackNavigator();

const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');
  return (
    <Stack.Navigator initialRouteName="postlist">
      <Stack.Screen
        options={({route, navigation}) => {
          return {
            headerTitle: (props) => (
              <View style={styles.input_container}>
                <TextInput
                  placeholder="Search on Twitter"
                  style={styles.input}
                  keyboardType="twitter"
                  onChangeText={onChangeText}
                  value={text}
                />
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
        name="postlist"
        component={SearchMain}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="postdetail"
        component={SearchItemDetail}
      />
    </Stack.Navigator>
  );
};

export default Search;

const styles = StyleSheet.create({
  input_container: {
    width: WIDTH * 0.7,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    margin: 3,
    backgroundColor: '#eaeaea',
    borderColor: '#f9f7f1',
    color: 'black',
  },
  input: {
    marginHorizontal: 2,
    fontFamily: 'BreeSerif-Regular',
    fontSize: 16,
    color: 'black',
  },
});
