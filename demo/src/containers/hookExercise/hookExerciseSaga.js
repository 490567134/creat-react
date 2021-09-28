import { hookExerciseAction } from "./hookExerciseAction";
import { put, takeLatest } from 'redux-saga/effects'

function* getList() {
  const url = '1111111111111111'
  try {
    // const res = yield call(axios.get, url)
    const list = [1, 2, 3, 4, 5]
    yield put({
      type: hookExerciseAction.changeStore,
      payload: {
        // list: res.data
        list: list
      }
    })

  } catch (err) {
    console.log(err);
  }
}

export function* watchHookeExercise() {
  yield takeLatest(hookExerciseAction.getList, getList)
}