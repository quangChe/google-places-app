import React from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import { Icon } from 'react-native-elements';

const SearchInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
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
            onChangeText={props.onChange}
            onSubmitEditing={props.onSubmit}/>
        </View>
        <TouchableOpacity onPress={props.onCancel}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.6,
    maxHeight: 140,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchBox: {
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
})

export default SearchInput;