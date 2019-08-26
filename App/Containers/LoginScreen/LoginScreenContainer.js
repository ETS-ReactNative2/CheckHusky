import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserDataActions from 'App/Stores/UserData/Actions'
import LoginScreenComponent from './LoginScreenComponent';

class LoginScreenContainer extends React.Component {
  render() {
    return (
        <LoginScreenComponent {...this.props}/>
    )
  }
}

LoginScreenContainer.propTypes = {
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
})

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    console.log(user);
    return dispatch(UserDataActions.userLogin(user))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer)