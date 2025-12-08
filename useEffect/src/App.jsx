import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
 const [num , setnum] = useState(0)
 const [num2 , setnum2] = useState(100)

 function numchange () {
  console.log('num is changing')
 }

  useEffect(function () {
    console.log('use effect is running...');
  },[num,num2])

  useEffect(function () {
    numchange()
  },[num2])

  // function random () {
  //   const a = Math.random()
  //   console.log(a);
  // }
  return (
    <div>
      <h1>Value of num is {num} </h1>
      <h2>Value of num2 is {num2} </h2>
      <button onClick={() => {
         setnum(num+1)
        // setnum2(num2+5)
      }} 
      onDoubleClick={() =>  {
        setnum2(num2+5)
      }}>click me</button>
      <button onMouseEnter={() => {
        setnum(num+10)
      }}
      onMouseLeave={() => {
        setnum2(num2+200)
      }}>submit me</button>
      {/* <button onClick={random}>Generate new button</button> */}
    </div>
  )
}

export default App
