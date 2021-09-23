import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { hookExerciseAction } from './hookExerciseAction';
// import { Button } from 'antd';
const HookExercise = (props) => {
  const { list } = props
  const [data, setData] = useState([1, 2, 3])
  useEffect(() => {
    props.getList()
    const timer = setTimeout(() => {
      setData([1, 2, 3, 4])
    }, 2000)
    setTimeout(() => {
      setData([1, 2, 3, 4, 5])
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  useEffect(() => {
    console.log(data, 'data变化了');
  }, [data])


  return (
    <div className={styles.homeBox} >
      <div className={styles.homeHeader}>
        HookExercise page
      </div>
    </div >
  )
}
const mapStateToProps = (state) => {
  return ({
    list: state.homeReducer.list
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeStore: payload => dispatch({ type: hookExerciseAction.changeStore, payload }),
  getList: payload => dispatch({ type: hookExerciseAction.getList }, payload)
})
export default connect(mapStateToProps, mapDispatchToProps)(HookExercise)

