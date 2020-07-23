import React, { Component } from 'react'
import {
  View
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './styles'

export default class HomeScreenComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRegion: null
    }
    this._map = null
  }

  handleRef = c => {
    this._map = c
  }

  onRegionChanged (_newRegion) {
    // To get the current region of the map.
  }

  onMapClicked () {
    // To get the coordinates of the clicked location.
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          ref={this.handleRef}
          onRegionChangeComplete={(value) => this.onRegionChanged(value)}
          mapType='standard'
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.currentRegion}
          onPress={(event) => this.onMapClicked(event)}
          showsUserLocation
          showsMyLocationButton={false}
          followsUserLocation
        />
      </View>
    )
  }
}
