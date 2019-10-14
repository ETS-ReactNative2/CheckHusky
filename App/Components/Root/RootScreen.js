import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as firebase from 'react-native-firebase';

import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import styles from './RootScreenStyle';
import * as StartupActions from '../../Actions/startUpActions';
import AsyncStorageUtil from '../../Utils/asyncStorage';

class RootScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('in did mount=======');
    this.props.startUp();
    this.getFCMToken();
    this.checkNotificationPermission();
    if (Platform.OS === 'android') {
      this.createAndroidNotificationChannel();
    }
    this.onTokenRefresh = firebase.messaging().onTokenRefresh((fcmToken) => {
      console.log('$$$$$ NEW TOKEN: ', fcmToken);
      AsyncStorageUtil.setAsyncStorage('DEVICE_TOKEN', fcmToken);
    });

    this.messageListener = firebase.messaging().onMessage((message) => {
      console.log('$$$$$ Remote message:', message);
      const notification = new firebase.notifications.Notification()
        .setNotificationId(message.messageId)
        .setTitle(message.data.title)
        .setBody(message.data.body)
        .android.setChannelId('boilerplate Notifications')
        .android.setSmallIcon('ic_stat_ic_notification')
        .android.setPriority(firebase.notifications.Android.Priority.Max)
        .setSound('default');
      firebase.notifications().displayNotification(notification);
    });

    this.notificationListener = firebase.notifications().onNotification((notification) => {
      console.log('onNotification======', notification);
      notification.setData(notification.data).setSound('default') // set sound in notification in order to get heads up notification on devices 7.1 and lower
        .android.setPriority(firebase.notifications.Android.Priority.Max)
        .android.setSmallIcon('ic_stat_ic_notification')
        .android.setChannelId('boilerplate Notifications');
      firebase.notifications().displayNotification(notification);
    });

    this.noificationOpened = firebase.notifications().onNotificationOpened((notification) => {
      console.log('onNotification====== opened====', notification);
    });
  }

  createAndroidNotificationChannel() {
    const channel = new firebase.notifications.Android.Channel(
      'boilerplate Notifications',
      'boilerplate Notifications',
      firebase.notifications.Android.Importance.High
    ).setDescription('A natural description of the channel');
    firebase.notifications().android.createChannel(channel);
  }

  getFCMToken = () => {
    firebase.messaging().getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          console.log('$$$$$ DEVICE TOKEN:', fcmToken);
          AsyncStorageUtil.setAsyncStorage('DEVICE_TOKEN', fcmToken);
        }
      }).catch(() => {
        console.error('$$$$$ DEVICE TOKEN ERROR:', fcmToken);
      });
  }

  checkNotificationPermission = () => {
    firebase.messaging().hasPermission().then((enabled) => {
      if (!enabled) {
        this.promptForNotificationPermission();
      }
    });
  }

  promptForNotificationPermission = () => {
    firebase.messaging().requestPermission().then(() => {
      console.log('Permission granted.');
    }).catch(() => {
      console.log('Permission rejected.');
    });
  }

  render() {
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
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startUp: () => dispatch(StartupActions.startUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
