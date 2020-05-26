import React from "react"


class ConditionalLoginApp extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log(this.state.isLoggedIn)
    this.setState((prevState) =>{
      return{
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    return(
      <div>
        <p>{this.state.isLoggedIn?"LoggedIn":"Logged out"}</p>
    <button onClick={this.handleClick}>{this.state.isLoggedIn?"Logout":"Login"}</button>
</div>
    )
  }
}

export default ConditionalLoginApp