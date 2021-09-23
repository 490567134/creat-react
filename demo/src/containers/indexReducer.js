import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import aboutReducer from './about/aboutReducer';
import hookExerciseReducer from './hookExercise/hookExerciseReducer';

const appReducer = combineReducers({
  homeReducer,
  aboutReducer,
  hookExerciseReducer,
})
export default appReducer