import React from 'react';
import { 
  View,
  StyleSheet,
} from 'react-native';

import Header from '../components/BookmarkHeader';
import BookmarkSlide from '../components/BookmarkSlide/BookmarkSlide';
import Footer from '../components/BookmarkFooter';

const BookmarkScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header/>
      <BookmarkSlide/>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

export default BookmarkScreen;