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
import { API_KEY } from '../../../API_KEY';

import { Icon } from 'react-native-elements';
import GoogleAttribution from '../../../assets/image/google_attribution.png';

export default class SearchScreen extends Component {
  state = {
    results: [],
    displayAttribution: true,
  };

}

const styles = StyleSheet.create({

})