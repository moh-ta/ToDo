import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('screen').width;
const screenHieght = Dimensions.get('screen').height;
const CartScreen = () => {
  return (
    <View style={styles.View1}>
      <ScrollView horizontal contentContainerStyle={styles.View2}>
        <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('../assets/Image.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('../assets/Image.jpeg')}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: '#8ff2c2',
  },
  View2: {
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    flex: 1,
  },
  image1: {
    width: screenWidth - 50,
    height: screenHieght / 4,
    margin: 5,
    borderRadius: 10,
  },
});
export default CartScreen;
