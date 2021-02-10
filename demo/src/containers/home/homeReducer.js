import Immutable from 'module';
import { homeAction } from './homeAction'
const initState = {
  loading: false,
  list: []
}

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case homeAction.loading:
      return state.set("loading", true)
    case homeAction.getListSuccess:
      return Object.assign({}, state, { loading: false })
    case homeAction.changeHomeStore:
      return Object.assign({}, state, action.payload)
    case homeAction.homeReducerReset:
      return initState
    default:
      return initState
  }

}
export default homeReducer