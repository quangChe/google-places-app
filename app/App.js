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
import Bookmarks from './src/components/Bookmarks/Bookmarks';

export default class App extends Component {
  state = {
    fontLoaded: false,
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
        <Bookmarks/>

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

  footer: {
    flex: 4,
  }
});
