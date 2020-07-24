import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import LocationService from '../../Services/locationService';
import * as CONST from '../../Utils/Constants';
import styles from './styles';
const _locationService = new LocationService();

export default class HomeScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: null,
    };
    this._map = null;
  }

  componentDidMount() {
    _locationService.getCurrentLocation(_location =>
      this.onLocation(_location, true),
    );
  }

  onLocation(_location, isFirst, isForeground = false) {
    if (_location) {
      const userLocation = {
        latitude: _location.latitude,
        longitude: _location.longitude,
        latitudeDelta: 0.0003333,
        longitudeDelta: isFirst
          ? 0.003333
          : CONST.CURRENT_SCREEN_WIDTH / CONST.CURRENT_SCREEN_HEIGHT / 0.00522,
      };
      this.setState({currentLocation: userLocation});
    } else {
      Alert.alert('Error in fetching location');
    }
  }

  handleRef = c => {
    this._map = c;
  };

  onRegionChanged(_newRegion) {
    // To get the current region of the map.
  }

  onMapClicked() {
    // To get the coordinates of the clicked location.
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={this.handleRef}
          onRegionChangeComplete={value => this.onRegionChanged(value)}
          mapType="standard"
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.currentLocation}
          onPress={event => this.onMapClicked(event)}
          showsUserLocation
          showsMyLocationButton={false}
          followsUserLocation
        />
      </View>
    );
  }
}
