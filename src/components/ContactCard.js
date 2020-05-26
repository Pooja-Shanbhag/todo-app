import React from "react"

function ContactCard(props) {
  console.log(props)
  return(
  <div>
    <img src = {props.contacts.imgUrl}/>
    <h3>{props.contacts.name}</h3>
    <p>Phone: {props.contacts.phone}</p>
    <p>Email: {props.contacts.email}</p>
  </div>
  )
}

export default ContactCard