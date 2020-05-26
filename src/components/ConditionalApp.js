import React from "react"
import ConditionalItem from "./ConditionalItem"

class ConditionalApp extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading: true,
      messages:["a"]
    }
  }

  componentDidMount(){
    setTimeout(() => 
      this.setState({
        isLoading:false
      }),2000
    )
  }

  render(){
    return(
      <div>
        {this.state.messages.length>0  ? <h1>You have {this.state.messages.length} messages</h1>:null}

        {this.state.messages.length>0  &&  <h1>You have {this.state.messages.length} new messages</h1>}
      {this.state.isLoading?<h1>Loading</h1>:<ConditionalItem />}
      </div>
    )
  }
}

export default ConditionalApp

