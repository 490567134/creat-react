import Immutable from 'module';
import { hookExerciseAction } from './hookExerciseAction'
const initState = {
  loading: false,
  list: []
}

const hookExerciseReducer = (state = initState, action) => {
  console.log(state, 'statettt');
  console.log(action, 'action.payload');
  switch (action.type) {
    case hookExerciseAction.loading:
      return state.set("loading", true)
    case hookExerciseAction.getListSuccess:
      return Object.assign({}, state, { loading: false })
    case hookExerciseAction.changeStore:
      console.log(Object.assign({}, state, action.payload), 222222222222);
      return Object.assign({}, state, action.payload)
    case hookExerciseAction.homeReducerReset:
      return initState
    default:
      return initState
  }

}
export default hookExerciseReducer