import React from 'react';
import { 
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CardDetails from './CardDetails';

const BookmarkCard = (props) => {
  const { photo } = props.bookmark;

  return (
    <TouchableHighlight style={styles.bookmarkCard} onPress={props.pressBookmark}>
      <ImageBackground source={{uri: photo}} style={styles.background}>
        <LinearGradient
          style={styles.contentBox}
          colors={['black', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.6 }}>
            <CardDetails details={props.bookmark}/>
        </LinearGradient>
      </ImageBackground>
    </TouchableHighlight>
  );
}

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