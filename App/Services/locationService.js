import { Alert } from 'react-native'
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'

let isBackgroundGeolocationConfigured = false
const getLocationParams = {
  enableHighAccuracy: true
}

export class LocationData {
  constructor () {
    // The desired location interval, and the minimum acceptable interval
    this.locationInterval = 60000 * 5 // Time (in milliseconds) between location information polls.  E.g. 60000*5 = 5 minutes

    // minLocationSaveInterval should be shorter than the locationInterval (to avoid strange skips)
    this.minLocationSaveInterval = Math.floor(this.locationInterval * 0.8) // Minimum time between location information saves.  60000*4 = 4 minutes

    // Maximum time that we will backfill for missing data
    this.maxBackfillTime = 60000 * 60 * 24 // Time (in milliseconds).  60000 * 60 * 8 = 24 hours
  }

  /**
     * Validates that `point` has both a latitude and longitude field
     * @param {*} point - Object to validate
     */
  isValidPoint (point) {
    if (!point.latitude && !point.latitude === 0) {
      console.error('`point` param must have a latitude field')
      return false
    }

    if (!point.longitude && !point.longitude === 0) {
      console.error('`point` param must have a longitude field')
      return false
    }

    return true
  }
}

export default class LocationService {
  config () {
    if (isBackgroundGeolocationConfigured) {
      BackgroundGeolocation.start()
      return
    }

    const locationData = new LocationData()

    BackgroundGeolocation.configure({
      maxLocations: 10,
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 5,
      distanceFilter: 50,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      notificationsEnabled: false,
      debug: false,
      startOnBoot: true,
      stopOnTerminate: false,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: this.locationInterval,
      fastestInterval: this.locationInterval,
      activitiesInterval: locationData.locationInterval,
      activityType: 'AutomotiveNavigation',
      pauseLocationUpdates: false,
      saveBatteryOnBackground: true,
      stopOnStillActivity: false,
      startForeground: false
    })

    BackgroundGeolocation.on('location', (location) => {

    })

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status)
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        // we need to set delay or otherwise alert may not be shown
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
            { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
          ]), 1000)
      }
    })

    BackgroundGeolocation.checkStatus(status => {
      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start()
      }
    })

    BackgroundGeolocation.start() // triggers start on start event
    isBackgroundGeolocationConfigured = true
  }

  /**
   * 
   * @param {*} _success callback with all stored locations
   * @param {*} _failure Callback with failure data
   */
  getStoredCurrentLocation (_success, _failure = () => {}) {
    return new Promise((resolve, reject) => {
      BackgroundGeolocation.getLocations(
        location => resolve(_success(location)),
        e => reject(_failure(e))
      )
    })
  }

  getCurrentLocation (_success, _failure = () => {}) {
    return new Promise((resolve, reject) => {
      BackgroundGeolocation.getCurrentLocation(
        location => resolve(_success(location)),
        e => reject(_failure(e)),
        getLocationParams
      )
    })
  }

  checkLocationServiceStatus () {
    BackgroundGeolocation.checkStatus(status => {
      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start()
      }
      return status
    })
  }
}
