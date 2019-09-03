import React from 'react';
import { connect } from 'react-redux'
import * as UserLoginActions from './../../Actions/userLoginActions'
import LoginScreenComponent from './LoginScreenComponent';
import NavigationService from './../../Services/NavigationService'

class LoginScreenContainer extends React.Component {
  componentDidUpdate(prevProps){
    if(this.props != prevProps && this.props.userData) {
      NavigationService.navigateAndReset('HomeTab')
    }
  }

  render() {
    return (
        <LoginScreenComponent {...this.props}/>
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
)(LoginScreenContainer)