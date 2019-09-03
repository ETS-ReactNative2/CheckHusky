import { put, call } from 'redux-saga/effects'
import UserData from './../Stores/UserData/Actions'
import {loginWithGoogle} from './../Services/googleAuth'
import {
  statusCodes,
} from "react-native-google-signin";

export function* userLogin(Action) {
  try {
    if(Action.USER_LOGIN!=null){
      yield put(UserData.userLoginSuccess(Action.USER_LOGIN));

    }else{
      const response =  yield call(loginWithGoogle);
      yield put(UserData.userLoginSuccess(response.user));
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
  }
}
