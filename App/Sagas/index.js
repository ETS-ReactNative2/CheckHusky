import { takeLatest, all } from 'redux-saga/effects';
import { startup } from './StartupSaga';
import { userLogin, userLogout } from './UserLoginSaga';
import * as CONST from '../Utils/Constants';

export default function* root() {
  yield all([
    //takeLatest(CONST.START_UP, startup),
    takeLatest(CONST.USER_LOGIN, userLogin),
    takeLatest(CONST.USER_LOGOUT, userLogout),
  ]);
}
