import { put, call } from 'redux-saga/effects'
import UserData from './../Stores/UserData/Actions'
import {loginWithGoogle} from './../Services/googleAuth'

export function* userLogin(Action) {
    if(Action.USER_LOGIN!=null){
      yield put(UserData.userLoginSuccess(Action.USER_LOGIN));

    }else{
      const response =  yield call(loginWithGoogle);
      yield put(UserData.userLoginSuccess(response.user));
    } 
}
