import React from 'react';
import {
  Text, View, TouchableOpacity,
  NativeModules,
  requireNativeComponent
} from 'react-native';
const { RNCAppleAuthentication } = NativeModules;
const SignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');

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
      <View>
        <SignInWithAppleButton style={{ height: 44, width: 200 ,  }} onPress={this.signIn} />
      </View>
    );
  }

  signIn = async () => {
    try {
      const result = await RNCAppleAuthentication.requestAsync({
        scopes: [RNCAppleAuthentication.Scope.FULL_NAME, RNCAppleAuthentication.Scope.EMAIL],
      });
      console.warn(result);
    } catch (err) {
      console.error(err);
    }
  };
}
