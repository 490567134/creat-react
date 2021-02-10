import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';

const appReducer = combineReducers({
  homeReducer
})
export default appReducer