import React from "react"
import TravelFormComponent from "./TravelFormComponent"

class TravelContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age:" ",
      gender:"",
      location:"",
      isVegan:false,
      isKosher:false,
      isLactoseFree:false
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name,value, type,checked} = event.target
    type==="checkbox"?
    this.setState({[name]:checked})
    // this.setState(prevState =>{
    //   return{
        
    //     diet:
    //     {
    //       ...prevState.diet,
    //       [name]:checked
    //     }
    //   }
      
    // }):
    :
      this.setState({[name]:value})
  }

  render(){
    return(
    <TravelFormComponent handleChange={this.handleChange} data = {this.state}/>
    )
  }
}

export default TravelContainer