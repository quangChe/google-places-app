import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import BookmarkCard from './BookmarkCard';

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
        
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
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

})

export default Bookmarks;