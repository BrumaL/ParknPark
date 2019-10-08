import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { logOutUser } from '../actions';

class MyAccountScreen extends Component {
  static navigationOptions = () => ({
    drawerLabel: 'Mitt Konto'
  });

  onLogoutButtonPress = () => {
    this.props.logOutUser();
  }

  render() {
    return (
      <View>
         <Button
            containerViewStyle={{ marginTop: 30 }}
            title='Logga Ut'
            buttonStyle={{ 
            borderRadius: 30, 
            borderColor: '#980C85', 
            backgroundColor: 'white',
            borderWidth: 1
            }}
            color='#980C85'
            onPress={this.onLogoutButtonPress}
          />
      </View>
    );
  }
}

export default connect(null, { logOutUser })(MyAccountScreen);
