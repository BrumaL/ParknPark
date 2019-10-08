import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { createUser } from '../actions';

class RegisterScreen extends Component {
  state = { email: '', password: '',
   emailError: '', passwordError: '' }

  onRegisterButtonPress = () => {
    const { email, password, verificationPassword } = this.state;

    this.setState({ emailError: '', passwordError: '', passwordVerificationError: '' });

    if(email.trim() === '') {
      this.setState({ emailError: 'Vänligen fyll i din e-postadress.' });
    }

    if (password === verificationPassword) {
      this.props.createUser(email, password);
    } else {
      this.setState({ passwordVerificationError: 'Lösenorden måste matcha.' });
    }
  }

  renderRegisterError = () => {
    if(this.props.registerErrorMessage) {
      return (
        <View>
          <Text style={{ color: '#dc3545', paddingRight: 20, paddingLeft: 20 }}>{this.props.registerErrorMessage}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <ImageBackground 
          source={require('../assets/pink_park_sign.jpg')}
          style={{ width: '100%', height: '100%', flex: 1 }}>
        </ImageBackground>

        <View style={{ flex: 2, marginRight: 50, marginLeft: 50 }}>

          <FormLabel labelStyle={styles.labelStyle}>E-post</FormLabel>
          <FormInput 
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            inputStyle={styles.inputStyle}
            placeholder='jane.doe@email.com'
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />
          <FormValidationMessage style={{ color: '#dc3545' }}>{this.state.emailError}</FormValidationMessage>

          <FormLabel labelStyle={styles.labelStyle}>Lösenord</FormLabel>
          <FormInput 
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder='********'
            inputStyle={styles.inputStyle}
            secureTextEntry
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />
          <FormValidationMessage>{this.state.passwordError}</FormValidationMessage>

          <FormLabel labelStyle={styles.labelStyle}>Verifiera lösenord</FormLabel>
          <FormInput 
            value={this.state.verificationPassword}
            onChangeText={(verificationPassword) => this.setState({ verificationPassword })}
            placeholder='********'
            inputStyle={styles.inputStyle}
            secureTextEntry
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />
          <FormValidationMessage>{this.state.passwordVerificationError}</FormValidationMessage>

          {this.renderRegisterError()}

          <Button 
            containerViewStyle={{ marginTop: 30 }}
            title='Skapa konto'
            buttonStyle={{ borderRadius: 30, backgroundColor: '#980C85' }}
            onPress={this.onRegisterButtonPress}
          />

        </View>

      </View>
      
    );
  }
}

const styles = {
  textHeaderStyle: {
    textAlign: 'center',
    color: '#980C85',
  },
  labelStyle: {
    color: '#980C85',
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    color: '#980C85'
  }
}

const mapStateToProps = ({ auth }) => {
  const { registerErrorMessage } = auth;

  return { registerErrorMessage };
}

export default connect(mapStateToProps, { createUser })(RegisterScreen);
