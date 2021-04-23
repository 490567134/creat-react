import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import aboutReducer from './about/aboutReducer';

const appReducer = combineReducers({
  homeReducer,
  aboutReducer,
})
export default appReducer