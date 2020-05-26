import React from "react"
import TodoItem from "./TodoItem"

const App1 = () =>{
  const firstName = "Pooja";
  const lastName = "Shanbhag"
  const date = new Date(2019,3,21,20);
  const hrs = date.getHours();
  let time = "morning";
  const styles = {
    
    fontSize: 27
  };

  if(hrs<12){
    time = "morning";
    styles.color = "#009900"
  }
  if(hrs>=12 && hrs<=17){
    time = "afternoon";
    styles.color = "#993333"
  }
  else{
    time = "evening";
    styles.color = "#000099"
  }
  
  return(
    
    <div className="btn-group form-check" data-toggle="buttons">
      <p>Hello {firstName+" "+lastName +". Good "+time}</p>
      
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <p style={styles}>Good day {`${firstName} ${lastName}`} </p>
    </div>
    
  )
}

export default App1