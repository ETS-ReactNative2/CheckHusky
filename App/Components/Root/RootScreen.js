import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import styles from './RootScreenStyle';

class RootScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen);
