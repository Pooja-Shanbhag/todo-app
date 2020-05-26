import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

function UseEffectApp() {
  const [randColor, setColor] = useState('');
  const [count, updateCount] = useState(0);

  // function increment(){
  //   updateCount(prevCount => prevCount+1)
  // }

  // function decrement(){
  //   updateCount(prevCount => prevCount-1)
  // }

  //component did mount
  useEffect(() => {
    const interval = setInterval(() => {
      // updateCount(prevCount => prevCount+1)
    }, 1000);

    //cleanup function i.e. component will unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
  Run this everytime the count changes i.e componentDidUpdate
  */
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  // Run only at beginning, as we are not watching any variable
  // useEffect(() => {
  //   setColor(randomcolor())
  // }, [])

  return (
    <div>
      {/* <h1>Is answer yes?{val}</h1> */}
      <p style={{ color: randColor }}>{count}</p>
      {/* <button onClick={() => updateCount(prevCount => prevCount+1)}>Change</button> */}
      {/* <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button> */}
    </div>
  );
}

export default UseEffectApp;
