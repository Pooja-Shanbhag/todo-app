import React from "react"
import Joke from "./Joke"
import JokeData from "../data/JokesData"

function JokeApp(){
  const jokeComp = JokeData.map(joke =>
      <Joke key = {joke.id} punchLine = {joke.punchLine}/>)
    
  
  return(
    <div>
    {jokeComp}
    </div>
  )
}


export default JokeApp;