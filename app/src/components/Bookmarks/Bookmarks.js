import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Bookmarks = (props) => (
  <View style={styles.bookmarks}>

    <View style={styles.noBookmarks}>
      <Text style={styles.big}>This trip is empty</Text>
      <Text style={styles.small}>Click the blue plus to pin a place</Text>
    </View>

    <View style={styles.hasBookmarks}>

    </View>

  </View>
);

const styles = StyleSheet.create({
  bookmarks: {
    flex: 4,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  noBookmarks: {
  },
  hasBookmarks: {
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
})

export default Bookmarks;