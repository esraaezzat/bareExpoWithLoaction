import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Location from 'expo-location'; 

export default function App() {

  const getUserLocationHandler = async() => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
  }
  return (
    <View style={styles.container}>
      <Button title="Get location" onPress={getUserLocationHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
