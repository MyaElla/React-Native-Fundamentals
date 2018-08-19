import React, { Component } from "react";
import Proptypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "#48BBEC"
  },
  // title: {
  //   marginBottom: 20,
  //   fontSize: 25,
  //   textAlign: 'center',
  //   color: '#fff'
  // },
  // searchInput: {
  //   height: 50,
  //   padding: 4,
  //   marginRight: 5,
  //   fontSize: 23,
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   borderRadius: 8,
  //   color: 'white'
  // },
  // button: {
  //   height: 45,
  //   flexDirection: 'row',
  //   backgroundColor: 'white',
  //   borderColor: 'white',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginVertical: 10,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  //
  // },
  // buttonText: {
  //   fontSize: 18,
  //   color: '#111',
  //   alignSelf: 'center'
  // },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});



export default class Main extends Component {


  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a github user</Text>

      </View>
    );
  }
}
