import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutUsTabComponent from './AboutUsTabComponent';

class AboutUsTabContainer extends Component {
  static navigationOptions = {
    title: 'My Payment'
  };

  render() {
    return <AboutUsTabComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUsTabContainer);
