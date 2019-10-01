import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import * as UserLoginActions from '../../Actions/userLoginActions';
import * as LanguageActions from '../../Actions/LanguageActions';
import LoginScreenComponent from './LoginScreenComponent';
import NavigationService from '../../Services/NavigationService';


const Analytics = firebase.analytics();

const LoginScreenContainer = (props) => {
  const { prevProps } = props;

  useEffect(() => {
    Analytics.setAnalyticsCollectionEnabled(true);
    Analytics.setCurrentScreen('Log_In', 'Login');
    if (props != prevProps && props.userData) {
      NavigationService.navigateAndReset('HomeTab');
    }
  }, [prevProps, props]);

  return <LoginScreenComponent props={props} />;
};

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
  lang: state.LanguageReducer.language
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(UserLoginActions.userLogin(user));
  },
  changeLanguage: (lang) => {
    return dispatch(LanguageActions.changeLanguage(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
