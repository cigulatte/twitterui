/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// Before rendering any navigation stack
import {enableScreens} from 'react-native-screens';
enableScreens();

AppRegistry.registerComponent(appName, () => App);
