import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { connect } from 'react-redux'
import NavigationService from "./../../Services/NavigationService";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
        // this.props.userData!=null || this.props.userData!=undefined ?
        //  this._navigateToHome()
        //  :
        // <View style={styles.container}>
        //   <View style={styles.logo}>
        //     {/* You will probably want to insert your logo here */}
        //     <Text>LOGO</Text>
        //   </View>
        // </View>
        <View style={styles.container}>
          <View style={styles.logo}>
            {/* You will probably want to insert your logo here */}
            <Text onPress={this._navigateToHome}>LOGO</Text>
          </View>
        </View>
    )
  }
}
const mapStateToProps = (state) => ({
  userData: state.userData.userData,
})

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(UserDataActions.userLogin(user))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)