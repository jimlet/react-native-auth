import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyANsaL-Q36-Qa0acxjegVUEBY7D8kgnPFw',
      authDomain: 'udemy-course-react-native-auth.firebaseapp.com',
      databaseURL: 'https://udemy-course-react-native-auth.firebaseio.com',
      projectId: 'udemy-course-react-native-auth',
      storageBucket: 'udemy-course-react-native-auth.appspot.com',
      messagingSenderId: '948318821762'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App!</Text>
      </View>
    );
  }
}

export default App;