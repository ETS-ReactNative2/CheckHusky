import React from 'react';
import {
  GoogleSigninButton,
} from 'react-native-google-signin';
import styles from './styles';

export default function GoogleSignInComponent({ props }) {
  const signIn = async () => {
    props.userLogin();
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
