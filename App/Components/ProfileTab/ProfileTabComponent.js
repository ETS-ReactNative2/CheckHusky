import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as CONST from '../../Utils/Constants'
import NavigationService from '../../Services/NavigationService'
import styles from './styles';

export default class ProfileTabContainer extends React.Component {
  logout (){
    this.props.userLogout();
  }

  componentDidUpdate(prevProps){
    if(this.props != prevProps && this.props.message == CONST.USER_LOGGED_OUT_SUCCESSFULLY) {
      NavigationService.navigateAndReset('LoginScreen');
    }
  }
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Profile Tab'}
            </Text>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>
                {`Name :  `}
              </Text>
              <Text style={styles.text}>
                {this.props.userData && this.props.userData.name}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.subsContainer}
              onPress={()=>this.logout()}
            >
              <Text style={styles.subsText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
