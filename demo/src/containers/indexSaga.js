import { all } from 'redux-saga/effects';
import { watchHome } from './home/homeSaga';
import { watchAbout } from './about/aboutSaga';
import { watchHookeExercise } from './hookExercise/hookExerciseSaga';

export default function* rootSaga() {
  yield all([
    watchHome(),
    watchAbout(),
    watchHookeExercise()
  ])
}