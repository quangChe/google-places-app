import React, {Component} from 'react';
import * as Font from 'expo-font';

import AppNavigation from './src/navigation/Navigation';

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

  render() {
    return (!this.state.fontLoaded) ? null : <AppNavigation/>;
  }
}


