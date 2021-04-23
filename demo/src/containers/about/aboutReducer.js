import Immutable from 'module';
import { aboutAction } from './aboutAction'
const initState = {
  loading: false,
  chartData: []
}

const aboutReducer = (state = initState, action) => {
  switch (action.type) {
    case aboutAction.loading:
      return state.set("loading", true)
    case aboutAction.changeStore:
      return Object.assign({}, state, action.payload)
    case aboutAction.resetStore:
      return initState
    default:
      return initState
  }

}
export default aboutReducer