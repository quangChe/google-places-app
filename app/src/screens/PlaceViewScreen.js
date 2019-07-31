import React, { Component } from 'react';
import { 
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { addBookmark, removeBookmark } from '../store/actions';

class PlaceViewScreen extends Component {

  placeNotBookmarked = () => {
    return this.props.bookmarks.every(bookmark => {
      return bookmark.key !== this.props.place.key;
    });
  }

  addBookmark = () => {
    if (this.placeNotBookmarked()) {
      this.props.addBookmark(this.props.place);
    }
  }

  removeBookmark = () => {
    this.props.removeBookmark(this.props.place.key)
  }

  render() {
    const { place } = this.props;

    let BookmarkButton = (this.placeNotBookmarked())
        ? <Button title='Add bookmark' onPress={this.addBookmark}></Button>
        : <Button title='Remove bookmark' onPress={this.removeBookmark}></Button>;

    return (
      <ImageBackground source={{uri: place.photo}} style={styles.container}>
        { BookmarkButton }
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  place: state.currentlyViewing
})

const mapDispatchToProps = dispatch => ({
  addBookmark: (place) => dispatch(addBookmark(place)),
  removeBookmark: (key) => dispatch(removeBookmark(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceViewScreen);