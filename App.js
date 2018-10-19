import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      auth: AuthScreen,
      welcome: WelcomeScreen,
      main: {
        screen: createBottomTabNavigator({
          map: MapScreen
        })
      }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator /> 
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
