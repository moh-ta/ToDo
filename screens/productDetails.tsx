import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const productDetails = () => {
  return (
    <View style={styles.firstImage}>
      <Image source={require('../assets/see.webp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  firstImage: {
    padding: 10,
    justifyContent: 'center',
  },
});
export default productDetails;
