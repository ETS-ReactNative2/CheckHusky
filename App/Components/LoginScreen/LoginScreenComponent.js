import React, {useState,useCallback} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import GoogleSignInContainer from '../GoogleAuth/GoogleSignInContainer';
import AppleSignInContainer from '../AppleAuth/AppleSignInComponent';
import FBAuthContainer  from '../FBAuth/FBAuthContainer';
import Validators from '../../Utils/Validators';
import showToast from '../../Utils/showToast';
import styles from './styles';

export default function LoginScreenComponent({ props }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback(
    () => {
      if (Validators.isEmpty(email)) {
        showToast('Email is empty');
      } else if (!Validators.validEmail(email)) {
        showToast('Email is invalid');
      } else if (Validators.isEmpty(password)) {
        showToast('Password is empty');
      } else if (!Validators.isValidPassword(password)) {
        showToast('Password is invalid');
      } else {
        const user = { name: email, password };
        props.userLogin(user);
      }
    },
    [email,password],
  );

  

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.signInContainers}>
          <Text style={styles.title}>Login Component</Text>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ flex: 1 }}>
              <TextInput
                underlineColorAndroid="transparent"
                returnKeyType="next"
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
                keyboardType="email-address"
                style={styles.emailInput}
              />
            </View>
            {email !== '' && (
              <View style={styles.crossIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setEmail('');
                  }}
                  style={[styles.crossIcon]}
                >
                  <Text style={{ fontSize: 26 }}>x</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TextInput
                underlineColorAndroid="transparent"
                returnKeyType="next"
                placeholder="Password"
                value={password}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
                style={styles.emailInput}
              />
            </View>
            {password !== '' && (
              <View style={styles.crossIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setPassword('');
                  }}
                  style={[styles.crossIcon]}
                >
                  <Text style={{ fontSize: 26 }}>x</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.subsContainer}
            onPress={() => onSubmit()}
          >
            <Text style={styles.subsText}>SUBMIT</Text>
          </TouchableOpacity>
          <View>
            <GoogleSignInContainer />
          </View>
          <View>
            <AppleSignInContainer />
          </View>
          <View style = {{alignItems : 'center'}}>
          <FBAuthContainer/>

          </View>
          <View>
            <TouchableOpacity
              style={styles.subsContainer}
              onPress={() => console.log('pressed')}
            >
              <Text style={styles.subsText}>Change Language</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
}
