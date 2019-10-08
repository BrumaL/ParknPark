import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator, createStackNavigator, DrawerActions } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import MapScreen from '../screens/MapScreen';
import ParkingScreen from '../screens/ParkingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import DrawerMenuScreen from '../screens/DrawerMenuScreen';
import TestScreen from '../screens/TestScreen';

const StackNavigator = createStackNavigator({
  Home: MapScreen,
  Parking: ParkingScreen,
  MyAccount: MyAccountScreen,
  Test: TestScreen
});

const DrawerNavigator = createDrawerNavigator({
  StackNavigator: StackNavigator,
}, {
  initialRouteName: 'StackNavigator',
  contentComponent: DrawerMenuScreen,
  drawerWidth: 300
});

const AuthNavigator = createBottomTabNavigator({
  Auth: AuthScreen,
  Register: RegisterScreen
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: DrawerNavigator,
  Auth: AuthNavigator
})

export default SwitchNavigator;
