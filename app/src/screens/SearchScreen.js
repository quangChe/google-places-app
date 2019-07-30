import React, { Component } from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput, 
  Modal, 
  Image,
  Text,
  View, 
} from 'react-native';

import axios from 'axios';
import { API_KEY } from '../../API_KEY';

import SearchInput from '../components/SearchInput';

export default class SearchScreen extends Component {
  state = {
    results: [],
    displayAttribution: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>TESTING SEARCH!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})