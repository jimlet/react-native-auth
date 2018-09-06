import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyANsaL-Q36-Qa0acxjegVUEBY7D8kgnPFw',
      authDomain: 'udemy-course-react-native-auth.firebaseapp.com',
      databaseURL: 'https://udemy-course-react-native-auth.firebaseio.com',
      projectId: 'udemy-course-react-native-auth',
      storageBucket: 'udemy-course-react-native-auth.appspot.com',
      messagingSenderId: '948318821762'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;