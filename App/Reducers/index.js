import { combineReducers } from 'redux'
import configureStore from '../Stores/CreateStore'
import rootSaga from '../Sagas'

export default () => {
  const rootReducer = combineReducers({
  })

  return configureStore(rootReducer, rootSaga)
}
