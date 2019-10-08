import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


class TestScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Testar en text'
  };

  render() {
    return (
      <View>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </View>
    );
  }
}

export default TestScreen;
