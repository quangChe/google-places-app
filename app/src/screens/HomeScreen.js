import React, {Component} from 'react';
import { 
  View,
  StyleSheet,
} from 'react-native';

import BookmarkCardImg from '../../assets/image/bookmarkCard.png';

import Header from '../components/Header/Header';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import Footer from '../components/Footer/Footer';

export default class HomeScreen extends Component {
  state = {
    bookmarks: [
      {key: '1', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '2', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '3', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '4', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '5', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '6', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}}
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header pressBookmark={this.search}/>
        <Bookmarks bookmarks={this.state.bookmarks}/>
        <Footer/>
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
});