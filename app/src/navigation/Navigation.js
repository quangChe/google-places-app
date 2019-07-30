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
    },
    Search: {
      screen: SearchScreen,
    },
    Place: {
      screen: PlaceViewScreen,
    }
  },
  { 
    headerMode: 'none' 
  }
)

export default createAppContainer(AppNavigator);