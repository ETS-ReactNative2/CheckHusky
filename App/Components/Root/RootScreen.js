import React, { Component } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View, SafeAreaView } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from '../../Stores/Startup/Actions'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
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
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
