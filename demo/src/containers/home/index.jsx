import styles from './index.module.scss';
import React, { useEffect } from 'react';
import Menu from '../menu';
import { connect } from 'react-redux';
import { homeAction } from '../home/homeAction';
import { Button } from 'antd';
const Home = (props) => {
  const { list } = props
  useEffect(() => {
    props.getList()
  }, [])

  return (
    <div className={styles.homeBox} >
      <div className={styles.homeHeader}>
        home page
      </div>
      <div>
        {list.map(item => {
          return (
            <div key={item}>{item}</div>
          )
        })}
        <Button type="primary">Primary Button</Button>
      </div>
      <Menu />
    </div >
  )
}
const mapStateToProps = (state) => {
  return ({
    list: state.homeReducer.list
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeStore: payload => dispatch({ type: homeAction.changeHomeStore, payload }),
  getList: payload => dispatch({ type: homeAction.getList }, payload)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)