import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

class MemeGeneratorApp extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <h1>Hi</h1>
        <Header/>
        <MemeGenerator/>
      </div>
    )
  }
}

export default MemeGeneratorApp