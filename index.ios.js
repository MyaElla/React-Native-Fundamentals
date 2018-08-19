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
  View,
  NavigatorIOS
} from 'react-native'
import Main from './App/components/Main'

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Github Notetaker',
              component: Main
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
