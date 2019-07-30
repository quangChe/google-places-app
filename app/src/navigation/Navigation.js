import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PlaceViewScreen from '../screens/PlaceViewScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    Place: {
      screen: PlaceViewScreen,
      path: 'place',
    }
  },
  {
    headerMode: 'none',
  }
)

export default createAppContainer(AppNavigator);