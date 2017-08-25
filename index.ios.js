/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var AppleHealthKit = require('react-native-apple-healthkit');

export default class hkDemo2 extends Component {
  componentDidMount() {
    // let options = {
    // permissions: {
    //     read: ["Height", "Weight", "StepCount", "DateOfBirth", "BodyMassIndex"],
    //     write: ["Weight", "StepCount", "BodyMassIndex"]
    // }
    // };
    //
    // AppleHealthKit.initHealthKit(options: Object, (err: Object, res: Object) => {
    //     if(err) {
    //         console.log("error initializing healthkit: ", err);
    //         return;
    //     }
    //     console.log("healthkit initialized.")
    //     // healthkit initialized...
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R s to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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

AppRegistry.registerComponent('hkDemo2', () => hkDemo2);
