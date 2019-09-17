import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import GoogleSignInComponent from './GoogleSignInComponent';
import * as UserLoginActions from "../../Actions/userLoginActions";

class GoogleSignInContainer extends React.Component {
  render() {
    return (
      <GoogleSignInComponent {...this.props} />
    );
  }
}

GoogleSignInContainer.propTypes = {
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
)(GoogleSignInContainer);
