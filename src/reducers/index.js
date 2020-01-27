import { combineReducers } from 'redux';
import AuthentificationReducer from './reducerAuthentification';
import ErrorReducer from './reducerError';

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  errors: ErrorReducer
});

export default rootReducer;
