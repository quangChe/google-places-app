import React from 'react';
import { 
  ImageBackground,
  StyleSheet, 
  View,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import FooterBackground from '../../../assets/image/tripBackground.png';

const Footer = () => (
  <View style={styles.container}>
    <ImageBackground source={FooterBackground} style={{width: '100%', height: '100%'}}>
      <LinearGradient
      colors={['#fff', 'rgba(255, 255, 255, 0)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.4 }}
      style={styles.overlay}>
        <LinearGradient
          colors={['black', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.6 }}
          style={styles.overlay}>
          <View style={styles.textBox}>
            <Text style={styles.textLrg}>Exploring LouisVille BBQ</Text>
            <Text style={styles.textSml}>LouisVille, Kentucky</Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  overlay: {
    flex: 1,
  },
  textBox: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    paddingBottom: 59,
  },
  textLrg: {
    fontFamily: 'Regular',
    fontSize: 23,
    color: '#fff',
  },
  textSml: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: 'rgba(212,201,215,1)',
  }
})

export default Footer;