import React,{Component} from 'react'

import ReactDom from 'react-dom'

import Demo2 from '../components/demo2/demo2.js'

import TodoApp from '../components/todolist/todolist.js' 

import AnimateBox from '../components/animatebox/animatebox.js'
//////////////////////Redux/////////////
const DELETE_TODO_ITEM="delete"
const ADD_TODO_ITEM="add"

import {connect,Provider} from 'react-redux'

import {createStore,bindActionCreators,applyMiddleware} from 'redux'

import thunkMiddleware from 'redux-thunk'

import createLogger from 'redux-logger'
//let fetcheddata=window.fetchddata=[]

fetch("/api/userdata").then(d=>d.json()).then((json)=>{
	ReactDom.render(
		<div>
		{json.map(v=>{
			return <div key={v.id}>{v.id}:{v.msg}</div>
		})}
		</div>
	,document.getElementById('example5'))
})
//console.log(fetcheddata)
let deleteAction=function(id){
	return {
		type:DELETE_TODO_ITEM,
		id
	}
}
let addAction=function(text){
	return {
		type:ADD_TODO_ITEM,
		text
	}
}
let delayAddAction=function(text,delay){
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(addAction(text))
		},delay*1000)
	}
}
let initialState={
	items:[]
}
let counter=0
let reducer=function(state=initialState,action){
	switch(action.type){
		case DELETE_TODO_ITEM:
			console.log("When Deleting Item with id:"+action.id)
			return jQuery.extend({},state,{
				items:state.items.filter(x=>{return x.id!=action.id})
			})
		case ADD_TODO_ITEM:
			console.log("When Adding Item With text"+action.text)
			let id=++counter;
			return jQuery.extend({},state,{
				items:[...state.items,{id,msg:action.text}]
			})
		default:
			return state
	}
}
let store=window.store=createStore(reducer)
window.AddAction=(text)=>{
	window.store.dispatch(addAction(text))
}
window.DelAction=(id)=>{
	window.store.dispatch(deleteAction(id))
}
// window.DelayAdd=(text,delay)=>{
// 	window.store.dispatch(delayAddAction(text,delay))
// }
window.GetState=()=>{
	return store.getState()
}
//////////////////////////////////////Redux-With-UI//////////////

function mapProps(state){
	return{
		items:state.items
	}
}
function mapActions(dispatch){
	return {
		add:(text)=>{dispatch(addAction(text))},
		del:(id)=>{dispatch(deleteAction(id))}
	}
}

let TodoApp_Binded=connect(mapProps,mapActions)(TodoApp)

ReactDom.render((
	<Provider store={store}>
		<TodoApp_Binded/>
	</Provider>

),document.getElementById('example4'))

/////////////////////
// ReactDom.render((
// 	<TodoApp items={[]}/>
// ),document.getElementById('example'));

// ReactDom.render((
// 	<div>HELLO,WORLD</div>
// ),document.getElementById('example'));


// ReactDom.render((
// 	<Demo2 text="我是猪子鱼222222"/>
// ),document.getElementById('example2'));

ReactDom.render((
	<AnimateBox/>

),document.getElementById('example3'))