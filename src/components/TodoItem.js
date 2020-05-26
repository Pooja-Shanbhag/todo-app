import React from "react"

const TodoItem = (props) =>  {
  const styleBack = {
    backgroundColor:"#888888"
  }
  return(
    <div class="form-check-label">
      <p className="btn btn-primary active" style={props.checked?styleBack:null}>
    <input type="checkbox" name="" id={props.id} checked={props.checked} autocomplete="off" className="checkbox"  onChange={() => props.handleChange(props.id)}/>{props.name}
    </p> </div>)
}

export default TodoItem