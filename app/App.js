import React, {Component} from 'react';
import * as Font from 'expo-font';
import { 
  StyleSheet, 
  View,
} from 'react-native';

import Header from './src/components/Header/Header';
import Bookmarks from './src/components/Bookmarks/Bookmarks';
import BookmarkCardImg from './assets/image/bookmarkCard.png';

export default class App extends Component {
  state = {
    fontLoaded: false,
    bookmarks: [
      {key: '1', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '2', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '3', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '4', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '5', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '6', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}}
    ]
  };

  async componentDidMount() {
    await Font.loadAsync({ 
      'Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
      'Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
      'Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  } 

  search = () => {
    alert('Hello!');
  }

  render() {
    return (!this.state.fontLoaded) ? null : (
      <View style={styles.container}>
        <Header pressBookmark={this.search}/>
        <Bookmarks bookmarks={this.state.bookmarks}/>

        {/* Footer */}
        <View style={styles.footer}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  footer: {
    flex: 4,
  }
});
