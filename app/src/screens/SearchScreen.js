import React, { Component } from 'react';
import { 
  StyleSheet,
  Dimensions,
  View, 
} from 'react-native';
import { connect } from 'react-redux';

import { placesAutocomplete, findPlace } from '../../util/api';
import { viewPlace } from '../store/actions';

import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

class SearchScreen extends Component {
  state = {
    results: [],
    displayAttribution: true,
    deviceHeight: 0
  };
  
  componentDidMount() {
    const { height } = Dimensions.get('screen');
    this.setState({deviceHeight: height});
  }

  autoComplete = async (val) => {
    try {
      const data = await placesAutocomplete(val);
      const places = data.map(place => ({
        key: place.place_id,
        description: place.description 
      }));
      this.setState({results: places, displayAttribution: false});
    } catch (e) {
      console.log(e);
    }
  }

  findPlace = async (event) => {
    try {
      const key = await findPlace(event.nativeEvent.text);
      this.setState({displayAttribution: false});
      this.getPlaceDetails(key);
    } catch (e) {
      console.log(e);
    }
  }

  getPlaceDetails = async (key) => {
    try {
      await this.props.getDetails(key, this.state.deviceHeight);
      this.props.navigation.navigate('Place');
    } catch(e) {
      console.log(e);
    }
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

const mapDispatchToProps = dispatch => ({
  getDetails: (key, height) => dispatch(viewPlace(key, height)),
})

export default connect(null, mapDispatchToProps)(SearchScreen);