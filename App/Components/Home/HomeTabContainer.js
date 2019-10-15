import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTabComponent from './HomeTabComponent';
import * as UserLoginActions from '../../Actions/userLoginActions';

class HomeTabContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <HomeTabComponent {...this.props} />
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
)(HomeTabContainer);
