import React from 'react'
import { 
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BookmarkCardImg from '../../../assets/image/bookmarkCard.png';

import CardDetails from './CardDetails';

const BookmarkCard = (props) => (
  <TouchableOpacity style={styles.bookmarkCard}>
    <ImageBackground source={BookmarkCardImg} style={styles.background}>
      <LinearGradient
        style={styles.contentBox}
        colors={['black', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.6 }}>
          <CardDetails />
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bookmarkCard: {
    width: 260,
    height: 260,
    marginLeft: 25,
    borderRadius: 8,
    overflow: 'hidden',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  contentBox: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
})

export default BookmarkCard;