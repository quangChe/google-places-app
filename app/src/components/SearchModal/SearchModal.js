import React from 'react';
import { 
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput, 
  Modal, 
  Image,
  Text,
  View, 
} from 'react-native';

import { Icon } from 'react-native-elements';
import GoogleAttribution from '../../../assets/image/google_attribution.png';

const SearchModal = (props) => {
  return (
    <Modal
      presentationStyle='fullscreen'
      animationType='slide'
      transparent={false}
      visible={props.open}>
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
              returnKeyType='go'/>
          </View>
          <TouchableOpacity onPress={props.cancel}>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        {/* No search */}
        <Image style={styles.attributionImg} source={GoogleAttribution}/>

        {/* AutoComplete Results */}
        <ScrollView>
      
        </ScrollView>
      </View>
    </Modal>
  );
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
  }
})

export default SearchModal;