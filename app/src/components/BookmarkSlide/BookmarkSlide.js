import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import BookmarkCard from './BookmarkCard';

const BookmarkSlide = (props) => {
  const renderBookmarkCard = (info) => <BookmarkCard bookmark={info.item} pressBookmark={() => alert(info.item.key)}/>

  return (props.bookmarks.length)
    ? (<View style={styles.bookmarks}>
        <FlatList 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          data={props.bookmarks}
          renderItem={renderBookmarkCard}/>
        </View>)
    : (<View style={styles.bookmarks}>
        <Text style={styles.bigText}>This trip is empty</Text>
        <Text style={styles.smallText}>Click the blue plus to pin a place</Text>
      </View>);
};

const styles = StyleSheet.create({
  bookmarks: {
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  bigText: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#808080',
    fontSize: 18,
    marginBottom: 7,
  },
  smallText: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#ACB7B9',
    fontSize: 13,
  },
})

export default BookmarkSlide;