import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import { api } from '../utils/api'
import Dashboard from './Dashboard';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "#48BBEC"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
});



export default class Main extends Component {
   constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event) {
     this.setState({
       username: event.nativeEvent.text
     });
   }

   handleSubmit() {
   // update spinning indicator
   this.setState({
     isLoading: true
   });
   api.getBio(this.state.username)
   .then((res) => {
     if (res.message === 'Not Found') {
       this.setState({
         error: 'User not found',
         isLoading: false
       });
       } else {
          // reroute to the next route, passing github info
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            component: Dashboard,
            passProps: { userInfo: res }
          });
          // reset state if going back
          this.setState({
            error: false,
            isLoading: false,
            username: ''
          });
        }
      });

 }


  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a github user</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
