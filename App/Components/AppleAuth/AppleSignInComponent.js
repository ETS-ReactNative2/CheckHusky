import React from 'react';
import { Text, View,TouchableOpacity, NativeModules} from 'react-native';
import {
  SignInWithApple,
  SignInWithAppleButton,
} from '@react-native-community/apple-authentication';
import styles from './styles';

export default class AppleSignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   signIn() {
    SignInWithApple.requestAsync({
      requestedScopes: [
          SignInWithApple.Scope.FULL_NAME,
          SignInWithApple.Scope.EMAIL,
      ]
      }).then(credentials => {
          // Handle successful authenticated
          console.log('credentials',credentials)
      }).catch(error => {
          // Handle authentication errors
          console.log('error',error)
      })
  }

  render() {
    return (
      <View style={styles.buttonStyle}>
        <TouchableOpacity
            onPress={() => this.signIn()} >
            <Text style={styles.textStyle}>Login With Apple</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
