import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import BookmarkCard from '../../../assets/image/bookmarkCard.png';

const Bookmarks = (props) => (
  <View style={styles.bookmarks}>

    {/* <View style={styles.noBookmarks}>
      <Text style={styles.big}>This trip is empty</Text>
      <Text style={styles.small}>Click the blue plus to pin a place</Text>
    </View> */}

    <View style={styles.hasBookmarks}>
      {/* Bookmark List */}
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
        {/* Bookmark Card */}
        <TouchableOpacity style={styles.bookmarkCard}>
          <ImageBackground source={BookmarkCard} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkCard}>
          <ImageBackground source={BookmarkCard} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkCard}>
          <ImageBackground source={BookmarkCard} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkCard}>
          <ImageBackground source={BookmarkCard} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </TouchableOpacity>

      </ScrollView>
    </View>

  </View>
);

const styles = StyleSheet.create({
  bookmarks: {
    flex: 4,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  noBookmarks: {
  },
  big: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#808080',
    fontSize: 18,
  },
  small: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#ACB7B9',
    fontSize: 13,
  },
  hasBookmarks: {
    height: '100%'
  },
  bookmarkCard: {
    width: 260,
    height: 260,
    marginLeft: 25,
    borderRadius: 8,
    backgroundColor: '#eee',
  }
})

export default Bookmarks;