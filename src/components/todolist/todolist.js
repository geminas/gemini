import React,{Component,PropType} from 'react'

let TodoApp =React.createClass({
    render(){
        return (
            <div>
                <TodoView items={this.props.items} deleteTodo={this.props.del}/>
                <TodoControl addTodo={this.props.add}/>
            </div>
        )
    }
})


class TodoView extends Component{
    handleDelete(id){
       // console.log(e)
        //console.log(e.target)
        console.log(id)
        this.props.deleteTodo(id)
    }
    render(){
        return (
            <ul>
                {
                    this.props.items.map(v=>{
                        return(
                            <li key={v.id}>
                                <label>{v.id}:</label>
                                <span>{v.msg}</span>
                                <span><button data-id={v.id} onClick={()=>{this.handleDelete(v.id)}}>DELETE</button></span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class TodoControl extends Component{
    handleClick(e){
        this.props.addTodo(this.refs.ctl_input.value)
        this.refs.ctl_input.value=''
    }
    render(){
        return (
        <div>
            <input ref="ctl_input" id="todo-ctl-input" placeholder="You Can Write What You Wanna Do Here" type="text"/>
            <button onClick={this.handleClick.bind(this)} ><span>Add Todo</span></button>
        </div>
        )
    }
}
export default TodoApp