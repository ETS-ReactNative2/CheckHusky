import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritesTabComponent from './FavoritesTabComponent';
import * as UserLoginActions from '../../Actions/userLoginActions';

class FavoritesTabContainer extends Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    return (
      <FavoritesTabComponent {...this.props} />
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
)(FavoritesTabContainer);
