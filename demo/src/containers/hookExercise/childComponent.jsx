import { react, useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import { actionChannel } from "redux-saga/effects";

const ChildComponent = (props) => {
	const [list, setList] = useState([])
	useEffect(() => {
		console.log(list, 'list');
	}, [])
	return (

		<div>
			{console.log('child render')}
			This is ChildComponent
			<p>{props.ccc && 'visible'}</p>
		</div>
	)
}


const mapStateToProps = (state) => {
	// console.log(state, 'state');
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {}
}
// const mapDispatchToProps = (dispatch) => ({
//     changeStore: payload => dispatch({ type: actionChannel.changeStore, payload })
// })
export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent)