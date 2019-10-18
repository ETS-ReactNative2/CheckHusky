import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTabComponent from './HomeTabComponent';
import * as userActions from '../../Actions/userActions';
import * as brandActions from '../../Actions/brandActions';

class HomeTabContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.props.getAllBrands();
  }

  render() {
    return (
      <HomeTabComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allBrands: state.BrandReducer.allBrands
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getAllBrands: () => {
    return dispatch(brandActions.getAllBrands());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabContainer);
