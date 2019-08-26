import { put } from 'redux-saga/effects'
import UserData from 'App/Stores/UserData/Actions'
import {loginWithGoogle} from 'App/Services/googleAuth'

export function* userLogin(Action) {
    console.log("userLogin",Action);
    // loginWithGoogle();
//   yield put(UserData.userLoginSuccess());
}
