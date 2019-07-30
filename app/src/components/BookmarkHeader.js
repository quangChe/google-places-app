import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BookmarkButton from '../../assets/image/addBookmarkButton.png';
import HeaderBackground from '../../assets/image/weatherHeader.png';

const BookmarkHeader = (props) => (
  <ImageBackground source={HeaderBackground} style={styles.background}>
    <LinearGradient
      colors={['#fff', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0)']}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0.9}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greetText}>Good morning</Text>
          <Text style={styles.infoText}>Today is 72&deg;F and Sunny</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
          <Image source={BookmarkButton} style={styles.bookmarkIcon}></Image>
        </TouchableOpacity> 
      </View>
    </LinearGradient>
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 2,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '15%',
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
  },
  greetText: {
    fontFamily: 'Light',
    color: '#0A0A0A',
    fontSize: 32,
  },
  infoText: {
    fontFamily: 'Medium',
    color: '#383838',
    fontSize: 13,
  },
  bookmarkIcon: {
    maxWidth: 60,
    maxHeight: 60,
  }
})

export default BookmarkHeader;