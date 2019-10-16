import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackComponent from './FeedbackComponent';
import * as UserLoginActions from '../../Actions/userLoginActions';

class FeedbackContainer extends Component {
  static navigationOptions = {
    title: 'My Bar',
  };

  render() {
    return (
      <FeedbackComponent {...this.props} />
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
)(FeedbackContainer);
