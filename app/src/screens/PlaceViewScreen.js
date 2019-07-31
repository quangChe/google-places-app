import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class PlaceViewScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Testing 123...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  place: state.currentlyViewing
})

export default connect(mapStateToProps)(PlaceViewScreen);