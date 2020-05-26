import React, {Component} from "react"

class AppFromClass extends Component{
  constructor(){
    super()
    this.state ={
      "name":"yes",
      "age":21,
      "loggedIn":false
    }
  }

  render(){
    
    return(
      <div>
        {/* <h1>Testing : {this.props.something}</h1> */}
        <h1>Testing {this.state.name} and age {this.state.age}</h1>
    <p>You are currently logged {this.state.loggedIn?"in":"out"}</p>
      </div>
    )
  }
}

export default AppFromClass