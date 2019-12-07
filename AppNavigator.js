/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './app/views/HomeScreen'
import ImageScreen from './app/views/ImageScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen},
  Image: { screen: ImageScreen }
});

export default AppNavigator;
