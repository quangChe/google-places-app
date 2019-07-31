import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { viewBookmark } from '../../store/actions';

import BookmarkCard from './BookmarkCard';

const renderBookmarkCard = (data, props) => {
  const pressBookmark = async () => {
    await props.viewBookmark(data.item.key);
    return props.navigation.navigate('Place');
  };

  return <BookmarkCard bookmark={data.item} pressBookmark={pressBookmark}/>;
}

const BookmarkSlide = (props) => {
  return (props.bookmarks.length)
    ? (<View style={styles.bookmarks}>
        <FlatList 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          data={props.bookmarks}
          renderItem={(item) => renderBookmarkCard(item, props)}/>
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

const mapStateToProps = state => ({
  bookmarks: state.bookmarks
})

const mapDispatchToProps = dispatch => ({
  viewBookmark: (key) => dispatch(viewBookmark(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BookmarkSlide));