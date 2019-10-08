import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { parkingAddressChanged, parkingCreate } from '../actions';

class ParkingScreen extends Component {

  onParkingAddressChange(text) {
    this.props.parkingAddressChanged(text);
  }

  onCreateParkingButtonPress = () => {
    this.props.parkingCreate(this.props.parkingAddress);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <FormLabel>Adress</FormLabel>
          <FormInput 
            onChangeText={this.onParkingAddressChange.bind(this)}
            value={this.props.parkingAddress}
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />

          <Button
            containerViewStyle={{ marginTop: 30 }}
            title='Skapa parkering'
            buttonStyle={{ borderRadius: 30, backgroundColor: '#980C85' }}
            onPress={this.onCreateParkingButtonPress}
          />
        </Card>

       
      </View>
    );
  }
}

const mapStateToProps = ({ parking }) => {
  const { parkingAddress } = parking;

  return { parkingAddress };
}

export default connect(mapStateToProps, { parkingAddressChanged, parkingCreate })(ParkingScreen);
