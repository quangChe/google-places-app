import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import BookmarkScreen from '../screens/BookmarkScreen';
import PlaceViewScreen from '../screens/PlaceViewScreen';

const AppNavigator = createStackNavigator(
  {
    Bookmarks: {
      screen: BookmarkScreen,
      path: 'bookmarks',
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