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

export default class SearchModal extends Component {
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

    console.log(places);
    this.setState({results: places, displayAttribution: false});
  }

  findPlace = async (event) => {
    const val = event.nativeEvent.text;
    const googRes = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${API_KEY}&inputtype=textquery&input=${val}`);
    const place = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${googRes.data.candidates[0].place_id}`);
    
    this.setState({displayAttribution: false});

    // For PlaceViewScreen
    console.log('ONE', place.data); 
  }

  findPlaceId = async (id) => {
    const place = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${id}`);
    
    console.log('TWO', place.data); 
  }

  render() {    
    const displayResults = (data) => {
      const id = data.item.key;
      
      return (
        <TouchableOpacity 
          style={styles.resultContainer}
          onPress={(id) => this.findPlaceId(id)}>
          <Text style={styles.result}>{data.item.description}</Text>
        </TouchableOpacity>
      )
    };

    const { displayAttribution, results } = this.state;
    let resultsList;


    if (results.length) {
      resultsList = <FlatList data={results} renderItem={displayResults} keyboardShouldPersistTaps='handled'/>
    } else {
      resultsList = (displayAttribution) 
        ? <Image style={styles.attributionImg} source={GoogleAttribution}/>
        : <Text style={styles.noResults}>No Results Found</Text>;
    }
      
    return (
      <Modal
        presentationStyle='fullscreen'
        animationType='slide'
        transparent={false}
        visible={this.props.open}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.inputBox}>
              <Icon 
                name='search'
                color='#8E8E93'
                size={19}/>
              <TextInput
                style={styles.inputField}
                placeholder='Search'
                autoFocus={true}
                returnKeyType='go'
                onChangeText={this.autoComplete}
                onSubmitEditing={this.findPlace}/>
            </View>
            <TouchableOpacity onPress={this.props.cancel}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.resultsContainer}>
          { resultsList }
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  searchContainer: {
    height: '16%',
    maxHeight: 140,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#dededf',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginRight: 12,
    width: '75%',
  },
  inputField: {
    paddingLeft: 5,
    fontSize: 17,
    width: '90%',
    color: '#888',
    fontFamily: 'Regular',
  },
  cancelBtn: {
    color: '#007AFF',
    fontSize: 17,
    fontFamily: 'Regular',
  },
  attributionImg: {
    height: 18,
    width: 144,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 20,
    tintColor: '#777'
  },
  resultContainer: {
    width: '100%',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  result: {
    fontFamily: 'Regular',
    fontSize: 17,
    color: '#333',
  },
  noResults: {
    alignSelf: 'center',
    fontFamily: 'Regular',
    fontSize: 17,
    margin: 20,
    color: '#333',
  }
});