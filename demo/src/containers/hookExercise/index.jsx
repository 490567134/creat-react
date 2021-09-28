import styles from './index.module.scss';
import React, { useEffect, useState, useContext, useRef, useReducer } from 'react';

import { connect } from 'react-redux';
import { hookExerciseAction } from './hookExerciseAction';
const MyContext = React.createContext();
// import { Button } from 'antd';
const HookExercise = (props) => {
  // const { list } = props
  // const [data, setData] = useState([1, 2, 3])
  // useEffect(() => {
  //   props.getList()
  //   const timer = setTimeout(() => {
  //     setData([1, 2, 3, 4])
  //   }, 2000)
  //   setTimeout(() => {
  //     setData([1, 2, 3, 4, 5])
  //   }, 3000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log(data, 'data变化了');
  // }, [data])


  // return (
  //   <div className={styles.homeBox} >
  //     <div className={styles.homeHeader}>
  //       HookExercise page
  //     </div>
  //   </div >
  // )

  // useContext
  const [value, setValue] = useState("init");
  return (
    <div>
      {(() => {
        console.log("render");
        return null;
      })()}
      <button onClick={() => { console.log('click：更新value'); setValue(`${Date.now()}_newValue`) }}>
        改变value
      </button>
      <MyContext.Provider value={value}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  );
  //useRef 
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  const inputEl = useRef(null);
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
  // useReducer
  // const initialState = { count: 0 };

  // function reducer(state = initialState, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 };
  //     case 'decrement':
  //       return { count: state.count - 1 };
  //     default:
  //       throw new Error();
  //   }
  // }
  // function Counter() {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   return (
  //     <>
  //       Count: {state.count}
  //       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  //       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  //     </>
  //   );
  // }
}


// 官方其他hook链接：(useReducer useCallback useMemo useRef useImperativeHandle useLayoutEffect useDebugValue) https://react.docschina.org/docs/hooks-reference.html

// 原来的getContext语法
// const ThemeContext = React.createContext({
//   theme: 'dark',
//   toggle: () => { }
// });

// <ThemeContext.Provider value={this.state}> 
//   <Button />
// </ThemeContext.Provider>

// function Button() {
//   return (
//     <ThemeContext.Consumer>
//       {({theme, toggle}) => (
//         <button
//           onClick={toggle} //调用回调
//           style={{backgroundColor: theme}}>
//           Toggle Theme
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }


const Child1 = () => {
  const value = useContext(MyContext);
  console.log("Child1-value", value);
  return <div>Child1-value: {value}</div>;
}

const Child2 = () => {
  console.log("Child2")
  return <div>Child2</div>;
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

