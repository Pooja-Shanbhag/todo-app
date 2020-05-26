import React from "react"

function TravelFormComponent(props){
  return(
    <div>
      <p>
      <input type="text" name="firstName" value = {props.data.firstName} onChange={props.handleChange} placeholder="first name"/>
      </p>
      <p>
      <input type="text" name="lastName" value = {props.data.lastName} onChange={props.handleChange} placeholder="last name"/>
      </p>

      <p>
      <input type="number" name="age" value = {props.data.age} onChange={props.handleChange} placeholder="age"/>
      </p>

      <p>
      <input type="radio" name="gender" value ="male" onChange={props.handleChange} checked = {props.data.gender==="male"}/>Male
      </p>
      <p>
      <input type="radio" name="gender" value = "female" onChange={props.handleChange} hecked = {props.data.gender=="female"}/>Female
      </p>

      <br/>
      <select name="location" value={props.data.location} onChange={props.handleChange}>
        <option value="">--Please select a destination---</option>
        <option value="San Franciso">San Franciso</option>
        <option value="Chicago">Chicago</option>
        <option value="New York">New York</option>
      </select>

      <br/>
      <br/>
      {/* <select name="diet" value={props.data.diet} onChange={props.handleChange}>
        <option value="vegetarian">Vegetarian</option>
        <option value="kosher">Kosher</option>
        <option value="lactose free">lactose free</option>
      </select> */}
      <p>
        <input type="checkbox" name="isVegan" onChange={props.handleChange} checked={props.data.isVegan}/>vegetarian
      </p>
      <p>
        <input type="checkbox" name="isKosher" onChange={props.handleChange} checked={props.data.isKosher}/>kosher
      </p>
      <p>
        <input type="checkbox" name="isLactoseFree"  onChange={props.handleChange} checked={props.data.isLactoseFree}/>lactose free
      </p>

  <h1>Hi {props.data.firstName} {props.data.lastName}. Here are your details</h1>
  <ul>
  <li>Your age is {props.data.age}</li>
  <li>Your are a {props.data.gender}</li>
  <li>Your destination is {props.data.location}</li>
  <li>Your diet choice is {props.data.isKosher?"Kosher":""}, {props.data.isVegan?"Vegan":""}, {props.data.isLactoseFree?"Lactose Free":""}</li>
  </ul>
    </div>
  )
}

export default TravelFormComponent