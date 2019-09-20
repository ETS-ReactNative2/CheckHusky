import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { connect } from 'react-redux'
import NavigationService from "./../../Services/NavigationService";
import * as UserLoginActions from './../../Actions/userLoginActions'
  
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text onPress={this._navigateToHome}>LOGO</Text>
          </View>
        </View>
    )
  }
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