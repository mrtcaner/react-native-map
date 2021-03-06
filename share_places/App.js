/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';

import FetcLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  //redux instead of state?
  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("coords:", position.coords);
        coords = position.coords;
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421
          }
        })
      }, err => {
        console.log("Error while fetching location", err);
      });

  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <FetcLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap userLocation={this.state.userLocation}/>
      </View>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

