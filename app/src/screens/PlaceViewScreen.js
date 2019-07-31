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

import BackIcon from '../../assets/image/goIcon.png';
import HeartIcon from '../../assets/image/heartIcon.png';

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
            <View style={styles.topBackgroundSection}>
              <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.backIcon} source={BackIcon}/>
              </TouchableOpacity>
              <View style={styles.detailsSection}>
                <View>
                  <Text style={styles.small}>
                    {place.city}{place.state !== '' ? <Text>,</Text> : null} {place.state}
                  </Text>
                  <Text style={styles.large}>{place.name}</Text>
                </View>
                <View>
                  <View style={styles.ratingContainer}>
                    <Image style={styles.ratingIcon} source={HeartIcon} />
                    <Text style={styles.rating}>{place.rating}</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Interact Section */}
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
  topBackgroundSection: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-end',
  },
  detailsSection: {
    flexDirection: 'row',
    paddingBottom: 34,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  small: {
    fontFamily: 'Bold',
    fontSize: 13,
    color: '#FFFFFF',
  },
  large: {
    fontFamily: 'Regular',
    fontSize: 24,
    color: '#FFFFFF',
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 11.25,
    paddingHorizontal:  9,
    paddingVertical: 4,
  },
  ratingIcon: {
    width: 13,
    height: 11,
    marginRight: 4.5,
  },
  rating: {
    fontFamily: 'Bold',
    fontSize: 13,
    color: '#1313AF',
  },
  interactiveSection: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  backButton: {
    position: 'absolute',
    left: 14,
    top: 49,
  },
  backIcon: {
    width: 35,
    height: 35,
    transform: [{rotate: '180deg'}]
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