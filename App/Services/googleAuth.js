import {
    GoogleSignin,
    statusCodes,
} from "react-native-google-signin";

GoogleSignin.configure({
    iosClientId:
      '580318158991-kt5n7fievdccofp779m7r539nti13fb2.apps.googleusercontent.com',
    webClientId:
      '580318158991-kaoe76t99ikgclu8elfh12osvu15pu8s.apps.googleusercontent.com',
});

export async function loginWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('_signIn userInfo', userInfo);
      this.setState({ userInfo });
    } catch (error) {
      console.log('_signIn error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
}