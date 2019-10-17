import { put, call } from "redux-saga/effects";
import { statusCodes } from "react-native-google-signin";
import * as UserLoginActions from "../Actions/userLoginActions";
import { loginWithGoogle, signOut } from "../Services/googleAuth";
import { CommonFetch } from '../Services/UserService';
import * as CONST from '../Utils/Constants';

const opts = {
  method: '',
  url: null,
  body: null
  };

export function* userLogin(action) {
  try {
    if (action.user != null) {
      yield put(UserLoginActions.userLoginSuccess(action.user));
    } else {
      const response = yield call(loginWithGoogle);
      yield put(UserLoginActions.userLoginSuccess(response.user));
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log("_signIn error", error);
    yield put(UserLoginActions.userLoginFailure(error));
  }
}

export function* userSignup(action) {
  opts.method = CONST.POST_API;
  opts.url = 'v1/users';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(UserLoginActions.userSignupSuccess(res));
    } else {
      yield put(UserLoginActions.userSignupFailure(res));
    }
  } catch (error) {
    yield put(UserLoginActions.userSignupFailure(error));
  }
}

export function* userLogout() {
  try {
    yield call(signOut);
    yield put(UserLoginActions.userLogoutSuccess());
  } catch (error) {
    yield put(UserLoginActions.userLogoutFailure(error));
  }
}

