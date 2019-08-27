import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from './../Stores/Example/Actions'
import { StartupTypes } from './../Stores/Startup/Actions'
import { UserActionTypes } from './../Stores/UserData/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { userLogin } from './UserLoginSaga';
export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(UserActionTypes.USER_LOGIN, userLogin),
  ])
}
