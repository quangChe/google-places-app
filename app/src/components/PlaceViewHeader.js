import React from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import BackIcon from '../../assets/image/goIcon.png';
import HeartIcon from '../../assets/image/heartIcon.png';

const PlaceViewHeader = (props) => {
  const { place } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
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
  );
}

const styles = StyleSheet.create({
  container: {
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

export default withNavigation(PlaceViewHeader);