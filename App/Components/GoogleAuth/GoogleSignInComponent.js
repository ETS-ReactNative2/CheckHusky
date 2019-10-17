import React from 'react';
import {
  GoogleSigninButton, GoogleSignin, statusCodes
} from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';

const Analytics = firebase.analytics();

export default function GoogleSignInComponent({ props }) {
  // const signIn = async () => {
  //   Analytics.logEvent('login_method', { type: 'google', email: '' });
  //   const user = { name: 'dummy_name', password: 'dummy' };
  //   props.userLogin(user);
  // };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign IN userInfo', userInfo);
      NavigationService.navigateAndReset('HomeTab');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <GoogleSigninButton
      style={styles.buttonStyle}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  );
}
