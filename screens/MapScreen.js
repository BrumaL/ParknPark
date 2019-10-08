import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

import { getCurrentUserLocation, onRegionChange, getParkingMarkers } from '../actions';
import { Spinner } from '../components/common';
import SearchAddress from '../components/SearchAddress';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft:
    <View style={{ marginLeft: 30 }}>
      <TouchableOpacity  onPress={() => {navigation.toggleDrawer()} }>
          <Icon name="menu" color="#980C85" size={35} />
      </TouchableOpacity>
    </View>,
      headerTransparent: true
  });

  componentWillMount() {
    this.props.getCurrentUserLocation();
    this.props.getParkingMarkers();
  }

  componentDidMount() {
    
  }
  
   _onRegionChangeComplete = (region) => {
    this.props.onRegionChange(region);
  }

render() {
    if(this.props.loading) {
      return (
        <Spinner size='large' />
      );
    } 
    else if (this.props.locationPermission === false) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Du måste aktivera "Plats"-behörighet för denna app.</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <MapView
            region={this.props.region} 
            style={{ flex: 1 }}
            onRegionChangeComplete={this._onRegionChangeComplete}
          >
          {this.props.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              title={marker.streetAddress}
              description={marker.userId}
            />
          ))}
          </MapView>
          <View style={{position: 'absolute', top: 100, left: (Dimensions.get('window').width / 2) - 125, width: 250}}>
            <SearchAddress />
          </View>
        </View>
      );
    }
  }
}

function mapStateToProps({ map }) {
  const { loading, region, error, locationPermission } = map;
  const markers = _.map(map.markers, (val) => {
    return { ...val };
  });

  return { loading, region, error, locationPermission, markers };
};

export default connect(mapStateToProps, { getCurrentUserLocation, onRegionChange, getParkingMarkers })(MapScreen);
