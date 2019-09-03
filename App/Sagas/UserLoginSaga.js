import { put, call } from 'redux-saga/effects'
import * as UserLoginActions from './../Actions/userLoginActions'
import { loginWithGoogle, signOut } from './../Services/googleAuth'

import {
  statusCodes,
} from "react-native-google-signin";

export function* userLogin(action) {
  try {
    if(action.user!=null){
      yield put(UserLoginActions.userLoginSuccess(action.user));

    }else{
      const response =  yield call(loginWithGoogle);
      yield put(UserLoginActions.userLoginSuccess(response.user));
    } 
  }
  catch(error){
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log('_signIn error', error);
    yield put(UserLoginActions.userLoginFailure(error));
  }
}

export function* userLogout() {
  try {
    yield call(signOut);
    yield put(UserLoginActions.userLogoutSuccess());
  }
  catch(error){
    yield put(UserLoginActions.userLogoutFailure(error));
  }
}