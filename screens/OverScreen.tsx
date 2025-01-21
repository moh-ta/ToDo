import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
/** Fetching Data with useEffect
Build an app that fetches user data from a public 
API (like countries rest) and displays the country name and the flag
 on the screen. Use useEffect to fetch the data
 when the component mounts and handle loading/error states. */

const OverScreen = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all', {
      method: 'GET', // HTTP Method
      headers: {
        'Content-Type': 'application/json', // Set content type for your request
        // Add other headers as necessary (e.g., Authentication token)
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCountries(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <View>
      {countries.length > 0 &&
        countries.map(c => (
          <View>
            {/* <Text>{c.name} </Text> */}
            {/* image */}
          </View>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({});
export default OverScreen;
