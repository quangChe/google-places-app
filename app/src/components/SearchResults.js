import React from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  View,
  Text
} from 'react-native';

import GoogleAttribution from '../../assets/image/google_attribution.png';

const displayResultItems = (data, onClick) => {
  const key = data.item.key;

  return (
    <TouchableOpacity 
      style={styles.resultContainer}
      onPress={() => onClick(key)}>
      <Text style={styles.result}>{data.item.description}</Text>
    </TouchableOpacity>
  )
};

const SearchResults = (props) => {
  const { displayAttribution, results, onClick } = props;
  let resultsList;

  if (results.length) {
    resultsList = <FlatList 
                    data={results}
                    keyboardShouldPersistTaps='handled'
                    renderItem={(item) => displayResultItems(item, onClick)}/>
  } else {
    resultsList = (displayAttribution) 
      ? <Image style={styles.attributionImg} source={GoogleAttribution}/>
      : <Text style={styles.noResults}>No Results Found</Text>;
  }
    
  return (
    <View style={styles.resultsContainer}>
      { resultsList }
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 8.4,
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
})

export default SearchResults;