import React from 'react';
import {
  View,
} from 'react-native';
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default function FBAuthComponent() {
  const get_Response_Info = (error, result) => {
    if (error) {
      alert(`Error fetching FB data: ${error.toString()}`);
    } else {
      console.log('## FB response : ', JSON.stringify(result));
    }
  };

  return (
    <View>
      <LoginButton
        readPermissions={['public_profile']}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('Error', error);
            alert(`login has error: ${result.error}`);
          } else if (result.isCancelled) {
            alert('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              console.log('## FB access token : ',data.accessToken.toString());
              const processRequest = new GraphRequest(
                '/me?fields=name,picture.type(large)',
                null,
                get_Response_Info
              );
                // Start the graph request.
              new GraphRequestManager().addRequest(processRequest).start();
            });
          }
        }}
        onLogoutFinished={LoginManager.logOut}
      />
    </View>
  );
}
