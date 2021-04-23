
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Menu from '../menu';
import { aboutAction } from './aboutAction';
import HeatChart from '../../component/About';
import styles from './index.module.scss';

const About = (props) => {
  const { chartData, getChartData } = props
  useEffect(() => {
    props.getChartData()
  }, [])
  return (
    <div className={styles.aboutContainer}>
      <HeatChart {...props}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return ({
    ...state.aboutReducer,
  })
}
const mapDispatchToProps = (dispatch) => ({
  changeAboutStore: payload => dispatch({ type: aboutAction.changeAboutStore }, payload),
  getChartData: payload => dispatch({ type: aboutAction.getChartData }, payload)
})
export default connect(mapStateToProps, mapDispatchToProps)(About)