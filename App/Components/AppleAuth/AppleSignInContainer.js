import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AppleSignInComponent from './AppleSignInComponent';
import * as UserLoginActions from "../../Actions/userLoginActions";

class AppleSignInContainer extends React.Component {
  render() {
    return (
      <AppleSignInComponent {...this.props} />
    );
  }
}

AppleSignInContainer.propTypes = {
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: () => dispatch(UserLoginActions.userLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppleSignInContainer);
