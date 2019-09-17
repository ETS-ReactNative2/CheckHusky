import React from 'react';
import { connect } from 'react-redux';
import * as UserLoginActions from '../../Actions/userLoginActions';
import LoginScreenComponent from './LoginScreenComponent';
import NavigationService from '../../Services/NavigationService';
// import { toggleLanguage } from '../../i18n/language';
import I18n from 'react-native-i18n';

class LoginScreenContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props != prevProps && this.props.userData) {
      NavigationService.navigateAndReset('HomeTab');
    }
  }

  render() {
    return (
      <LoginScreenComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
  // currentLanguage: state.languageReducer.language
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(UserLoginActions.userLogin(user));
  },
  // toggleLanguage: () => dispatch(toggleLanguage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
