import React, {Component} from 'react';
import { Font } from 'expo';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import BookmarkButton from './assets/image/addBookmarkButton.png';

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({ 
      'Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
      'Medium': require('./assets/fonts/SFProDisplay-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (!this.state.fontLoaded) ? null : (
      <View style={styles.container}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greetText}>Good morning</Text>
            <Text style={styles.infoText}>Today is 72&deg;F and Sunny</Text>
          </View>
          <TouchableOpacity>
            <Image source={BookmarkButton} style={styles.bookmarkIcon}></Image>
          </TouchableOpacity> 
        </View>

        <View>

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
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
    maxHeight: 300,
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
});
