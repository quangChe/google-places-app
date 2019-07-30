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
      visible={props.open}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      {/* <KeyboardAvoidingView 
        behavior='height'
        styles={styles.modalContainer}> */}
        <View style={styles.searchContainer}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon 
                name='search'
                color='#8E8E93'
                size={19}/>
              <TextInput
                style={styles.input}
                placeholder='Search'
                autoFocus={true}
                returnKeyType='go'/>
            </View>
            <TouchableOpacity onPress={props.cancel}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          {/* No search */}
          <Image style={styles.attribution} source={GoogleAttribution}/>

          {/* AutoComplete Results */}
          {/* <ScrollView>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
            <View style={styles.searchMatches}>
              <Text style={styles.matchItem}>Test</Text>
            </View>
          </ScrollView> */}
        </View>
      {/* </KeyboardAvoidingView> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  searchContainer: {
    height: '16%',
    maxHeight: 140,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  inputContainer: {
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
  icon: {
    color: '#8E8E93',
    height: 14,
    width: 14,
  },
  input: {
    paddingLeft: 5,
    fontSize: 17,
    width: '90%',
    color: '#888',
    fontFamily: 'Regular',
  },
  btnText: {
    color: '#007AFF',
    fontSize: 17,
    fontFamily: 'Regular',
  },
  attribution: {
    height: 18,
    width: 144,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 20,
    tintColor: '#777'
  },
  searchMatches: {
    width: '100%',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  matchItem: {
    fontFamily: 'Regular',
    fontSize: 17,
  }
})

export default SearchModal;