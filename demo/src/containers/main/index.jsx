
import RouterConfig from '../../router/router';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import { homeAction } from '../home/homeAction';
const Main = (props) => {
  return (
    // 路由判断
    <div className={styles.container}>
      <RouterConfig />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    list: state.homeReducer.list,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeStore: payload => dispatch({ type: homeAction.changeHomeStore, payload })
})
export default connect(mapStateToProps, mapDispatchToProps)(Main)