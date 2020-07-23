import { combineReducers } from 'redux'
import configureStore from '../Stores/CreateStore'
import rootSaga from '../Sagas'
import LocationReducer from './LocationReducer'

export default () => {
  const rootReducer = combineReducers({
    LocationReducer
  })

  return configureStore(rootReducer, rootSaga)
}
