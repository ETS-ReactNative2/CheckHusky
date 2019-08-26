import React from 'react';
import GoogleSignInComponent from './GoogleSignInComponent';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserDataActions from 'App/Stores/UserData/Actions'

class GoogleSignInContainer extends React.Component {
  render() {
    return (
        <GoogleSignInComponent {...this.props}/>
    )
  }
}

GoogleSignInContainer.propTypes = {
  userData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
})

const mapDispatchToProps = (dispatch) => ({
  userLogin: () => dispatch(UserDataActions.userLogin()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleSignInContainer)