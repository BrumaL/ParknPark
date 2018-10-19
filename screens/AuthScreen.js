import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FormInput, Card } from 'react-native-elements';

class AuthScreen extends Component {
  render() {
    return (
        // <ImageBackground source={require('../assets/numbered_parking.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={{ marginTop: 50 }}>
              <FormInput
                      containerStyle={styles.containerStyle}
                      onChangeText={() => {}}
                      value={''}
                      placeholder='Email'
                      inputStyle={styles.inputStyle}
                      underlineColorAndroid='transparent'
              />
              <FormInput
                      containerStyle={styles.containerStyle}
                      onChangeText={() => {}}
                      value={''}
                      placeholder='Password'
                      inputStyle={styles.inputStyle}
                      secureTextEntry
                      underlineColorAndroid='transparent'
              />
          </View>
        // </ImageBackground>
    );
  }
}

const styles = {
  containerStyle: {
    borderColor: '#8A2BE2', 
    borderWidth: 1,
    borderRadius: 15,
    margin: 15
  },
  inputStyle: {
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      color: 'white'
  }
}

export default AuthScreen;
