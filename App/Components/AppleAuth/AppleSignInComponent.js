import React from 'react';
import {
  Text, View, TouchableOpacity,
  NativeModules,Platform,
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

  render() {
    return (
      <View>
      {
        Platform.OS=='ios'?
          <SignInWithAppleButton style={{ height: 44, width: 200 ,  }} onPress={this.signIn} />
        : null
      }
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
