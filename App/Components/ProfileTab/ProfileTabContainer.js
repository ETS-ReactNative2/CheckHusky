import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileTabComponent from './ProfileTabComponent';
import * as UserLoginActions from '../../Actions/userLoginActions';

class ProfileTabContainer extends Component {
  
  render() {
    return (
      <ProfileTabComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(UserLoginActions.userLogout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTabContainer);
