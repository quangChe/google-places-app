import React from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import CheckMark from '../../assets/image/checkmarkIcon.png';
import PinIcon from '../../assets/image/pinIcon.png';

const PlaceViewFooter = (props) => {
  const { place, bookmarked, removeBookmark, addBookmark } = props;

  const BookmarkButton = (bookmarked) 
    ? (<TouchableOpacity
          style={[styles.removeButton, styles.bookmarkButton]} 
          onPress={removeBookmark}>
            <Image source={CheckMark} style={styles.checkIcon}/>
            <Text style={[{color: '#1C1F1F'}, styles.buttonText]}>Pinned To Trip</Text>
      </TouchableOpacity>)
    : (<TouchableOpacity
          style={[styles.addButton, styles.bookmarkButton]} 
          onPress={addBookmark}>
          <Text style={[{color: '#FFFFFF'}, styles.buttonText]}>Pin To Trip</Text>
      </TouchableOpacity>);

  return (
    <View style={styles.container}>
      { BookmarkButton }
      <View style={styles.addressBox}>
        { place.landmark === '' 
            ? null 
            : ( <View style={styles.landmark}>
                  <Image source={PinIcon} style={styles.pinIcon}/>
                  <Text style={styles.landmarkName}>{place.landmark}</Text>
                </View>
              )
        }
        <Text style={styles.address}>{place.address}</Text>
      </View>
      <Image style={styles.map} source={{uri: place.map}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  addressBox: {
    width: '90%',
    alignContent: 'flex-start',
    marginBottom: '3%',
  },
  landmark: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    width: 7, 
    height: 7, 
    marginRight: 4,
  },
  landmarkName: {
    fontFamily: 'Bold',
    fontSize: 10,
    color: '#030303'
  },
  address: {
    fontFamily: 'Regular',
    fontSize: 11,
    color: '#030303'
  },
  map: {
    width: '90%',
    height: '50%',
    borderRadius: 10,
  },
  bookmarkButton: {
    width: '88%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 16,
    borderRadius: 22.5,
    marginTop: '6%',
    marginBottom: '6%',
  },
  removeButton: {
    backgroundColor: '#00FF1C',
  },
  addButton: {
    backgroundColor: '#1313AF'
  },
  checkIcon: {
    width: 11, 
    height: 9,
    marginRight: 7,
  },
  buttonText: {
    fontFamily: 'Medium',
    fontSize: 15,
  }
})

export default PlaceViewFooter;