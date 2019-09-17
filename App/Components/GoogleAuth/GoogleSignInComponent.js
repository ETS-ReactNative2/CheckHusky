import React from 'react';
import { Text, View } from 'react-native';
import {
  GoogleSigninButton,
} from 'react-native-google-signin';
import Style from './styles';
import styles from './styles';

export default class GoogleSignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _signIn = async () => {
    this.props.userLogin();
  };

  render() {
    return (
      <GoogleSigninButton
        style={styles.buttonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
      />
    );
  }
}
