import { all } from 'redux-saga/effects';
import { watchHome } from './home/homeSaga';

export default function* rootSaga() {
  yield all([
    watchHome()
  ])
}