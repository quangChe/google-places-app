import React from 'react'
import { 
  View,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

import BookmarkCard from './BookmarkCard';

const renderBookmarkCard = (info) => <BookmarkCard/>

const BookmarkSlide = (props) => (
  <View style={styles.hasBookmarks}>

    {/* TODO: */}
    {/* <FlatList 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      data={props.bookmarks}
      renderItem={renderBookmarkCard}/> */}

    <ScrollView
      horizontal={true} 
      showsHorizontalScrollIndicator={false}>
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
})

export default BookmarkSlide;
