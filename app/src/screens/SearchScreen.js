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
import SearchResults from '../components/SearchResults';

export default class SearchScreen extends Component {
  state = {
    results: [],
    displayAttribution: true,
  };

  autoComplete = async (val) => {
    const googRes = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${val}`);
    const places = googRes.data.predictions.map(place => {
      return { 
        key: place.place_id,
        description: place.description 
      };
    });
    this.setState({results: places, displayAttribution: false});
  }

  findPlace = async (event) => {
    const val = event.nativeEvent.text;
    const googRes = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${API_KEY}&inputtype=textquery&input=${val}`);
    this.setState({displayAttribution: false});
    this.getPlaceDetails(googRes.data.candidates[0].place_id);
  }

  getPlaceDetails = async (id) => {
    const place = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${id}`); 
    
    // TODO: Use Redux to store currently viewing place
    console.log(place.data.result);
    this.props.navigation.navigate('Place');
  }

  cancelSearch = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { results, displayAttribution } = this.state;

    return (
      <View style={styles.container}>
        <SearchInput 
          onChange={this.autoComplete} 
          onSubmit={this.findPlace}
          onCancel={this.cancelSearch}/>
        <SearchResults
          displayAttribution={displayAttribution} 
          results={results} 
          onClick={this.getPlaceDetails}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})