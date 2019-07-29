import React, {Component} from 'react';
import * as Font from 'expo-font';
import { 
  ImageBackground,
  StyleSheet, 
  View,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BookmarkCardImg from './assets/image/bookmarkCard.png';
import FooterBackground from './assets/image/tripBackground.png';

import Header from './src/components/Header/Header';
import Bookmarks from './src/components/Bookmarks/Bookmarks';


export default class App extends Component {
  state = {
    fontLoaded: false,
    bookmarks: [
      {key: '1', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '2', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '3', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '4', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '5', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}},
      {key: '6', image: BookmarkCardImg, details: { name: 'Royals Hot Chicken', rating: 4.3, location: 'Louisville, Kentucky'}}
    ]
  };

  async componentDidMount() {
    await Font.loadAsync({ 
      'Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
      'Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
      'Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  } 

  search = () => {
    alert('Hello!');
  }

  render() {
    return (!this.state.fontLoaded) ? null : (
      <View style={styles.container}>
        <Header pressBookmark={this.search}/>
        <Bookmarks bookmarks={this.state.bookmarks}/>
        <View style={styles.footer}>
          <ImageBackground source={FooterBackground} style={{width: '100%', height: '100%'}}>
            <LinearGradient
            colors={['#fff', 'rgba(255, 255, 255, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={styles.footerOverlay}>
              <LinearGradient
                colors={['black', 'transparent']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0.6 }}
                style={styles.footerOverlay}>
                <View style={styles.textBox}>
                  <Text style={styles.textLrg}>Exploring LouisVille BBQ</Text>
                  <Text style={styles.textSml}>LouisVille, Kentucky</Text>
                </View>
              </LinearGradient>
            </LinearGradient>
          </ImageBackground>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  footer: {
    flex: 4,
  },
  footerOverlay: {
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
});
