import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FBAuthComponent from './FBAuthComponent';
import * as UserLoginActions from '../../Actions/userLoginActions';

const FBAuthContainer = (props) => {
  return (
    <FBAuthComponent props={props} />
  );
};

FBAuthContainer.propTypes = {
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
)(FBAuthContainer);
