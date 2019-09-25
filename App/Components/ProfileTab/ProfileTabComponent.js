import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as CONST from '../../Utils/Constants';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';

export default function ProfileTabComponent({ props }) {
  const { prevProps } = props;
  useEffect(() => {
    if (props != prevProps && props.message === CONST.USER_LOGGED_OUT_SUCCESSFULLY) {
      NavigationService.navigateAndReset('LoginScreen');
    }
  }, [prevProps, props]);

  const logout = () => {
    props.userLogout();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'Profile Tab'}
      </Text>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>
          {'Name :  '}
        </Text>
        <Text style={styles.text}>
          {props.userData && props.userData.name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.subsContainer}
        onPress={() => logout()}
      >
        <Text style={styles.subsText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
