import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import SwitchNavigator from './router/routes';

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDiMd5tCn0Q9vsCpe21mjAOdd2SlLCLGlQ",
      authDomain: "parknpark-accfd.firebaseapp.com",
      databaseURL: "https://parknpark-accfd.firebaseio.com",
      projectId: "parknpark-accfd",
      storageBucket: "parknpark-accfd.appspot.com",
      messagingSenderId: "331645873890"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 24 : 0 
  }
});
