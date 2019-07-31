import React, { Component } from 'react';
import { 
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { addBookmark, removeBookmark } from '../store/actions';

import PlaceViewHeader from '../components/PlaceViewHeader';

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
    const unbookmarked = this.placeNotBookmarked();
        // ? <Button title='Add bookmark' onPress={this.addBookmark}></Button>
        // : <Button title='Remove bookmark' onPress={this.removeBookmark}></Button>;

    return (
      <ImageBackground source={{uri: place.photo}} style={styles.container}>
        {/* Background Section */}
        <LinearGradient
          colors={['black', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.overlay}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.2 }}
            style={styles.overlay}>

            <PlaceViewHeader place={place}/>
            <View style={styles.interactiveSection}>
              
            </View>

          </LinearGradient>
        </LinearGradient>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  interactiveSection: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
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