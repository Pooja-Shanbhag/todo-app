import React,{Component} from "react"

class FormApp extends Component{
constructor(){
  super()
  this.state={
    firstName:"",
    lastName:"",
    isFriendly:false,
    gender:"",
    color:"blue"
  }
  this.handleChange = this.handleChange.bind(this)
}
handleChange(event){
  const {name,value, type, checked} = event.target
  type === "checkbox"?this.setState({[name]:checked}):this.setState({
    // firstName:event.target.value
    // [event.target.name]:event.target.value
    [name]: value
  })
}

render(){
  return(
    <div>
      <form>
        <input type="text" name = "firstName" placeholder="first name" onChange={this.handleChange} value={this.state.firstName}/>
        <input type="text" name = "lastName" placeholder="last name" onChange={this.handleChange} value={this.state.lastName}/>
        <br/>
        <label >is friendly
        <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange}/>
        <p>{this.state.firstName} {this.state.lastName}</p></label>

        <br/>
        <textarea onChange={this.handleChange}/>
        <br/>
        
        <label>
        <input type="radio" checked={this.state.gender==="male"} name="gender" value="male" onChange={this.handleChange}/>Male
        </label>
        <label>
        <input type="radio" checked={this.state.gender==="female"} name="gender" value="female" onChange={this.handleChange}/>Female</label>
        <p>You are a {this.state.gender}</p>

        <br/>
        <select value={this.state.color} onChange={this.handleChange} name="color">
          <option value="blue">Blue</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="grey">Grey</option>
        </select>
        <p>Selected color {this.state.color}</p>
      </form>
    </div>
  )
}
}

export default FormApp