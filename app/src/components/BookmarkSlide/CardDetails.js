import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import GoIcon from '../../../assets/image/goIcon.png';
import SmallHeartIcon from '../../../assets/image/smallHeartIcon.png';

const CardDetails = (props) => {
  const { details } = props;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.detailBox}>
          <Text style={styles.location}>
            {details.city}{details.state !== '' ? <Text>,</Text> : null} {details.state}
          </Text>
          <View style={styles.rating}>
            <Image source={SmallHeartIcon} style={{ height: 7, width: 7 }}></Image>
            <Text style={styles.score}>{ details.rating }</Text>
          </View>
        </View>
        <Text style={styles.name}>{ details.name }</Text>
      </View>
      <Image source={GoIcon} style={{ height: 34, width: 34 }}></Image>
    </View>
  )
};

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
    maxWidth: '90%',
  },
})

export default CardDetails;