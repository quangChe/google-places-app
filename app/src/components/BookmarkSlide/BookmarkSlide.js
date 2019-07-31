import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import BookmarkCard from './BookmarkCard';


const renderBookmarkCard = (data, navigation) => {
  const navigate = navigation.navigate;
  return <BookmarkCard bookmark={data.item} pressBookmark={() => navigate('Place')}/>;
}

const BookmarkSlide = (props) => {
  return (props.bookmarks.length)
    ? (<View style={styles.bookmarks}>
        <FlatList 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          data={props.bookmarks}
          renderItem={(item) => renderBookmarkCard(item, props.navigation)}/>
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

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  }
}

export default connect(mapStateToProps)(withNavigation(BookmarkSlide));