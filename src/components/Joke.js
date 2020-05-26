import React from "react"

function Joke(props){
  return(
    <div>
      <h1 style={{display:props.question?"block":"none"}}>Question: {props.question}</h1>
      <p>Ans: {props.punchLine}</p>
    </div>
  )
}

export default Joke