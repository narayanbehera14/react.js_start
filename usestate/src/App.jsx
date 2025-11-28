import React, { useState } from 'react'

const App = () => {
  let a = 20 ;
  
  const [num , setnum] = useState(10)
  const [username , setusername] = useState("Narayan")

  function changeName () {
    setusername("Behera")
    setnum(14)
    console.log(username)
  }

  function changeNum () {
    console.log(num)
    setnum(420)

  }

  function changeA () {
    console.log(a)
    // a = 3011
    a++
    console.log(a)
  }

  return (
    <div>
      <h1>Value of a is {a}</h1>
            <button onClick={changeA}>Click</button>


      <h2>value of num is {num} </h2>
      <button onClick={changeNum}>Click</button>

      <h3>My Name is {username} </h3>
      <button onClick={changeName} >clicked</button>
      
    </div>
  )
}

export default App
