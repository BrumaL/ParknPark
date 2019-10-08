import React, { Component } from 'react';
import firebase from 'firebase';
import { View, ActivityIndicator, StatusBar } from 'react-native';

class AuthLoadingScreen extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default AuthLoadingScreen;
