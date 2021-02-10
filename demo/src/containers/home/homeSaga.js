import { homeAction } from "./homeAction";
import { call, put, takeLatest, all, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

function* getList() {
  const url = '1111111111111111'
  try {
    // const res = yield call(axios.get, url)
    const list = [1, 2, 3, 4, 5]
    yield put({
      type: homeAction.changeHomeStore,
      payload: {
        // list: res.data
        list: list
      }
    })

  } catch (err) {
    console.log(err);
  }
}

export function* watchHome() {
  yield takeLatest(homeAction.getList, getList)
}