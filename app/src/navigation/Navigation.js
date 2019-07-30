import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import PlaceViewScreen from '../screens/PlaceViewScreen';

const AppNavigator = createStackNavigator(
  {
    Bookmarks: {
      screen: BookmarkScreen,
      path: 'bookmarks'
    },
    Search: {
      screen: SearchScreen,
      path: 'search'
    },
    Place: {
      screen: PlaceViewScreen,
      path: 'place'
    }
  },
  { 
    headerMode: 'none' 
  }
)

export default createAppContainer(AppNavigator);