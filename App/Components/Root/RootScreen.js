import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import styles from './RootScreenStyle';
import * as StartupActions from '../../Actions/startUpActions';

function RootScreen(props) {
  useEffect(() => {
      props.startUp();
  }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

RootScreen.propTypes = {
  startUp: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startUp: () => dispatch(StartupActions.startUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
