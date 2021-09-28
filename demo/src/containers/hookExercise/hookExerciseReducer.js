import Immutable from 'module';
import { hookExerciseAction } from './hookExerciseAction'
const initState = {
  loading: false,
  list: []
}

const hookExerciseReducer = (state = initState, action) => {
  switch (action.type) {
    case hookExerciseAction.loading:
      return state.set("loading", true)
    case hookExerciseAction.getListSuccess:
      return Object.assign({}, state, { loading: false })
    case hookExerciseAction.changeStore:
      return Object.assign({}, state, action.payload)
    case hookExerciseAction.homeReducerReset:
      return initState
    default:
      return initState
  }

}
export default hookExerciseReducer