import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { connect } from 'react-redux'
import NavigationService from "./../../Services/NavigationService";
import * as UserLoginActions from './../../Actions/userLoginActions'

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      const { navigation } = props;
      NavigationService.navigateAndReset('LoginScreen', navigation);
    }, 2000);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text onPress={this._navigateToHome}>LOGO</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(UserLoginActions.userLogin(user))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)