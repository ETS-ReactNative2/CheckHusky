import React from 'react';
import AppleSignInContainer from './AppleSignInContainer';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserDataActions from './../../Stores/UserData/Actions'

class AppleSignInContainer extends React.Component {
  render() {
    return (
        <AppleSignInContainer {...this.props}/>
    )
  }
}

AppleSignInContainer.propTypes = {
  userData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  //userData: state.userData.userData,
})

const mapDispatchToProps = (dispatch) => ({
  //userLogin: () => dispatch(UserDataActions.userLogin()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppleSignInContainer)