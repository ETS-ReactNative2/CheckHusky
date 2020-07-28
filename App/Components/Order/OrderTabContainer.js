import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTabComponent from "./OrderTabComponent";
import * as userActions from "../../Actions/userActions";

class OrderTabContainer extends Component {
  static navigationOptions = {
    title: "My Orders"
  };

  render() {
    return <OrderTabComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTabContainer);
