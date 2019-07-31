import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { addBookmark, removeBookmark } from '../store/actions';

class PlaceViewScreen extends Component {
  render() {
    const { 
      place,
      bookmarks,
      addBookmark, 
      removeBookmark
    } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text>Testing 123...</Text> */}
        <Button title='Add bookmark' onPress={() => addBookmark(place)}></Button>
        <Button title='Remove bookmark' onPress={() => removeBookmark(place.key)}></Button>
      </View>
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