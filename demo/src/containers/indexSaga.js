import { all } from 'redux-saga/effects';
import { watchHome } from './home/homeSaga';
import { watchAbout } from './about/aboutSaga';

export default function* rootSaga() {
  yield all([
    watchHome(),
    watchAbout()
  ])
}