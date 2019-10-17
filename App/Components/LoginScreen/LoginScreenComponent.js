import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Platform
} from 'react-native';

import firebase from 'react-native-firebase';
import { SignInWithAppleButton } from 'react-native-apple-authentication';
import GoogleSignInContainer from '../GoogleAuth/GoogleSignInContainer';
import FBAuthContainer from '../FBAuth/FBAuthContainer';
import Validators from '../../Utils/Validators';
import showToast from '../../Utils/showToast';
import styles from './styles';
import I18n from '../../i18n/index';

const Analytics = firebase.analytics();
const enableGoogle = true;
const enableFb = true;
const enableApple = (Platform.OS === 'ios') ? true : false;

export default function LoginScreenComponent({ props, onSignupPressed }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const appleSignIn = (result) => {
    console.log('Resssult', result);
  };

  const onSubmit = useCallback(() => {
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
      Analytics.logEvent('login_method', { type: 'email', email, platform: Validators.platform() });
      props.userLogin(user);
    }
  }, [email, password, props]);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.signInContainers}>
        <Text style={styles.title}>{I18n.t('login_title')}</Text>
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
              placeholder={I18n.t('password')}
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
          <Text style={styles.subsText}>{I18n.t('submit')}</Text>
        </TouchableOpacity>
        <View>
          {
            enableGoogle
            && (
            <View>
              <GoogleSignInContainer />
            </View>
            )
          }
          {
            enableFb
            && (
            <View>
              <FBAuthContainer />
            </View>
            )
          }
          {
            enableApple
            && (
            <View style={styles.appleCont}>
              { SignInWithAppleButton(styles.appleBtn, this.appleSignIn) }
            </View>
            )
          }
          <View style={styles.signupButtonContainer}>
            <Text style={styles.orTextStyle}> OR </Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => {
                onSignupPressed();
              }}
            >
              <Text style={styles.subsText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.subsContainer}
              onPress={() => {
                // this.props.changeLanguage()
              }}
            >
              <Text style={styles.subsText}>{I18n.t('changeLanguage')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
