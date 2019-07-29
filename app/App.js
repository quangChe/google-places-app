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
      'Medium': require('./assets/fonts/SFProDisplay-Medium.ttf')
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
});
