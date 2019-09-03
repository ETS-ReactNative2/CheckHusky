import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from './../Sagas'
import UserLoginReducer from '../Reducers/UserLoginReducer'
import StartUpReducer from '../Reducers/StartUpReducer'

export default () => {
  const rootReducer = combineReducers({
    UserLoginReducer: UserLoginReducer,
    StartUpReducer: StartUpReducer
  })

  return configureStore(rootReducer, rootSaga)
}
