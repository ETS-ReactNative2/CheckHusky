import React, { Component } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View, SafeAreaView } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import * as StartupActions from '../../Actions/startUpActions'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startUp()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef)
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

RootScreen.propTypes = {
  startUp: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startUp: () => dispatch(StartupActions.startUp()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
