// import React from "react"
import React, { useState } from 'react';

function UseStateApp() {
  // const [val] = React.useState("Yeah")
  // const [val] = useState("no")

  const [count, updateCount] = useState(0);
  const [answer, setAnswer] = useState('Yes');
  // console.log(val)

  function increment() {
    updateCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    updateCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      {/* <h1>Is answer yes?{val}</h1> */}
      <p>{count}</p>
      {/* <button onClick={() => updateCount(prevCount => prevCount+1)}>Change</button> */}
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default UseStateApp;
