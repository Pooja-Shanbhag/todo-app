import React from "react"
import todoData from "../data/TodoData"
import TodoItems from "./TodoItem"

class TodoApp extends React.Component{
  constructor(){
    super()
    this.state = {
      todo: todoData,
      count: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id){
    // this.setState(function change(prevState){
    //   return({
    //   count:prevState.count+1})
    // })
   
    this.setState((prevState) => {
      const updatedTodo = this.state.todo.map(item => {
        if(item.id===id){
          item.checked = !item.checked
        }
        return item
      })
      return ({
        todo: updatedTodo
      })

    })
  }
  render(){
    const todoComp = this.state.todo.map(items => <TodoItems name = {items.name} checked={items.checked} id= {items.id} handleChange={this.handleChange}/>)
    return(
    <div>
      {todoComp}
      {/* <p>{this.state.count}</p>
      <button onClick = {this.handleClick}>Click me</button> */}
    </div>
  )
  }
}

export default TodoApp