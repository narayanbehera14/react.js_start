import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
 const [num , setnum] = useState(0)

  useEffect(function () {
    console.log('use effect is running...');
  })

  function random () {
    const a = Math.random()
    console.log(a);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setnum(10)
      }}>click me</button>
      {/* <button onClick={random}>Generate new button</button> */}
    </div>
  )
}

export default App
