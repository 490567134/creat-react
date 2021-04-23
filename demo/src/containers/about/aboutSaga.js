import { aboutAction } from "./aboutAction";
import { call, put, takeLatest, all, takeEvery } from 'redux-saga/effects'
// import axios from 'axios';

function* getChartData() {
  const url = '1111111111111111'
  try {
    // const res = yield call(axios.get, url)
    const list = [1, 2, 3, 4, 5]
    yield put({
      type: aboutAction.changeStore,
      payload: {
        // list: res.data
        chartData: list
      }
    })

  } catch (err) {
    console.log(err);
  }
}

export function* watchAbout() {
  yield takeLatest(aboutAction.getChartData, getChartData)
}