import React, {Component} from 'react';
import { Font } from 'expo';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Header from './src/components/Header';

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({ 
      'Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
      'Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
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
        
        {/* Bookmarks */}
        <View style={styles.bookmarks}>
          <View style={styles.noBookmarks}>
            <Text style={styles.big}>This trip is empty</Text>
            <Text style={styles.small}>Click the blue plus to pin a place</Text>
          </View>
          <View style={styles.hasBookmarks}>

          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}></View>

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
  bookmarks: {
    flex: 4,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  noBookmarks: {
  },
  hasBookmarks: {
  },
  big: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#808080',
    fontSize: 18,
  },
  small: {
    fontFamily: 'Regular',
    textAlign: 'center',
    color: '#ACB7B9',
    fontSize: 13,
  },

  footer: {
    flex: 4,
  }
});
