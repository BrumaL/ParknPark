import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Spinner } from '../components/common';

class AuthScreen extends Component {
   componentDidMount() {
      this.onAuthComplete(this.props);
   }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.user) {
      this.props.navigation.navigate('map');
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress = () => {
    this.props.loginUser(this.props.loginEmail, this.props.loginPassword);
  }

  renderErrorMessage() {
    if (this.props.loginErrorMessage) {
      return (
        <View>
          <Text style={{ color: '#dc3545', paddingRight: 20, paddingLeft: 20 }}>{this.props.loginErrorMessage}</Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <View style={{ marginTop: 50, marginBottom: 30 }}>
          <Spinner size='large' />
        </View>
      );
    }

    return (
      <Button
        containerViewStyle={{ marginTop: 30 }}
        title='Logga in'
        buttonStyle={{ borderRadius: 30, backgroundColor: '#980C85' }}
        onPress={this.onLoginButtonPress}
      />
    );
}

  render() {
    return (
      <View style={{ borderColor: 'black', flex: 1 }}>

        <View style={{ borderColor: 'black', flex: 1, justifyContent: 'center' }}>
          <Text h1 style={styles.textHeaderStyle}>Park n' Park</Text>
        </View>

        <View style={{ padding: 50, flex: 2 }}>

          <FormLabel labelStyle={styles.labelStyle}>E-post</FormLabel>
          <FormInput
            containerStyle={[styles.formContainerStyle, { marginBottom: 15 }]}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.loginEmail}
            placeholder='jane.doe@email.com'
            inputStyle={styles.inputStyle}
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />

          <FormLabel labelStyle={styles.labelStyle}>Lösenord</FormLabel>
          <FormInput
            containerStyle={styles.formContainerStyle}
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.loginPassword}
            placeholder='********'
            inputStyle={styles.inputStyle}
            secureTextEntry
            underlineColorAndroid='#980C85'
            selectionColor='#980C85'
          />

          {this.renderErrorMessage()}

          {this.renderLoginButton()}

          <Button
            containerViewStyle={{ marginTop: 30 }}
            title='Fortsätt med Facebook'
            buttonStyle={{ borderRadius: 30, backgroundColor: '#3B5998' }}
            icon={{ name: 'facebook-square', type: 'font-awesome' }}
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
    marginBottom: 50
  },
  labelStyle: {
    color: '#980C85'
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    color: '#980C85'
  }
}

const mapStateToProps = ({ auth }) => {
  const { loginPassword, loginEmail, loginErrorMessage, loading, user } = auth;

  return { loginPassword, loginEmail, loginErrorMessage, loading, user };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(AuthScreen);
