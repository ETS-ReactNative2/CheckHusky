import { combineReducers } from 'redux';
import configureStore from '../Stores/CreateStore';
import rootSaga from '../Sagas';
import UserLoginReducer from './UserLoginReducer';
import StartUpReducer from './StartUpReducer';
import LanguageReducer from './LanguageReducer';

export default () => {
  const rootReducer = combineReducers({
    UserLoginReducer,
    StartUpReducer,
    LanguageReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
