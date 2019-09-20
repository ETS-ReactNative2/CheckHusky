import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import * as UserLoginActions from './../../Actions/userLoginActions'
import LoginScreenComponent from './LoginScreenComponent';
import NavigationService from './../../Services/NavigationService'

const LoginScreenContainer = (props) => {
  const { prevProps}  = props;

  useEffect(() => {
    if(props != prevProps && props.userData) {
      NavigationService.navigateAndReset('HomeTab')
    }
  }, [prevProps, props]);

  return (
      <LoginScreenComponent props={props}/>
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
)(LoginScreenContainer)