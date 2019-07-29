import React from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo';

import BookmarkCardImg from '../../../assets/image/bookmarkCard.png';
import GoIcon from '../../../assets/image/goIcon.png';
import SmallHeartIcon from '../../../assets/image/smallHeartIcon.png';

const BookmarkCard = (props) => (
  <TouchableOpacity style={styles.bookmarkCard}>
    <ImageBackground source={BookmarkCardImg} style={styles.background}>
      <LinearGradient
        style={styles.contentBox}
        colors={['black', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.6 }}>
        <View style={styles.infoBox}>
          <View>
            <View style={styles.detailBox}>
              <Text style={styles.location}>Louiseville, Kentucky</Text>
              <View style={styles.rating}>
                <Image source={SmallHeartIcon} style={{ height: 7, width: 7 }}></Image>
                <Text style={styles.score}>4.8</Text>
              </View>
            </View>
            <Text style={styles.name}>Royals Hot Chicken</Text>
          </View>
          <Image source={GoIcon} style={{ height: 34, width: 34 }}></Image>
        </View>
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
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  name: {
    fontFamily: 'Regular',
    color: '#fff',
    fontSize: 18,
  },
  detailBox: {
    flexDirection: 'row',
  },
  location: {
    fontFamily: 'Bold',
    color: '#ACB7B9',
    fontSize: 10,
    marginRight: 3,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(19,19,175,0.5)',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 6,
  },
  score: {
    fontFamily: 'Bold',
    color: '#51BCF9',
    fontSize: 8,
    marginLeft: 2,
  }
})

export default BookmarkCard;