import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class DrawerMenuScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View style={{ flex: 1}}>
        <ScrollView>
          <View style={{ marginTop: 30, marginBottom: 30, alignItems: 'center' }}>
            <Text style={{ color: '#980C85', fontSize: 20 }}>Park n' Park</Text>
          </View>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('MyAccount')} style={{ color: '#980C85' }}>
                Mitt konto
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Test')} style={{ color: '#980C85' }}>
              Test
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Parking')} style={{ color: '#980C85' }}>
              Hyr ut
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  menuItem:{
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
}

DrawerMenuScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerMenuScreen;
