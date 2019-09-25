import React from 'react';
import {
  View,
  NativeModules, Platform,
  requireNativeComponent
} from 'react-native';

const { RNCAppleAuthentication } = NativeModules;
const SignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');

export default function AppleSignInComponent({ props }) {
  const signIn = async () => {
    try {
      const result = await RNCAppleAuthentication.requestAsync({
        scopes: [RNCAppleAuthentication.Scope.FULL_NAME, RNCAppleAuthentication.Scope.EMAIL],
      });
      console.warn(result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View>
      {
        Platform.OS === 'ios'
          ? <SignInWithAppleButton style={{ height: 44, width: 200, }} onPress={signIn} />
          : null
      }
    </View>
  );
}
