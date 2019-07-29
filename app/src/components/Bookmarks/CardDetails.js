import React from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import GoIcon from '../../../assets/image/goIcon.png';
import SmallHeartIcon from '../../../assets/image/smallHeartIcon.png';

const CardDetails = (props) => (
  <View style={styles.container}>
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
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
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
  },
  name: {
    fontFamily: 'Regular',
    color: '#fff',
    fontSize: 18,
  },
})

export default CardDetails;