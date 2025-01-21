import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const profileScreen = () => {
  return (
    <View style={styles.View}>
      <View style={styles.container}>
        <TextInput style={styles.Input} placeholder="Enter your number" />
      </View>
      <TouchableOpacity style={styles.toudh}>
        <Icon name="finger-print-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    marginTop: 30,

    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure space between elements
  },
  toudh: {
    backgroundColor: '#c2edd8',
    borderRadius: 15,
    padding: 10,
  },
  container: {
    width: '85%', // Updated to make sure the container takes up 80% of the parent's width
    // Ensures it takes up available space within the parent
    // padding: 10, // Optionally add padding for better spacing
  },
  Input: {
    width: '100%',
    backgroundColor: '#c2edd8',
    // Let the input field take the full width of its container
    borderRadius: 15,
    height: 50,
    // padding: 18,
  },
});

export default profileScreen;
