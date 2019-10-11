import React from 'react';
import {
  GoogleSigninButton,
} from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import styles from './styles';

const Analytics = firebase.analytics();

export default function GoogleSignInComponent({ props }) {
  const signIn = async () => {
    Analytics.logEvent('login_method', { type: 'google', email: '' });
    const user = { name: 'dummy_name', password: 'dummy' };
    props.userLogin(user);
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
