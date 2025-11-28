import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const App = () => {
  const [value , setvalue] = useState({name : "liju", age : 25})
  const [num , setnum] = useState ([10,2,55,10])
  const [user , setuser] = useState({username: "behera",age:47})

  const btnclicked = () => {
    // console.log(value.name);
    
    // console.log(value.age)
    const newNum = {...value};
    newNum.name = 'Narayan'
    newNum.age = 58
    setvalue(newNum)
    console.log(newNum)
  }

  const number  = () =>  {
   const newNumber = [...num]
    newNumber.push(100)
    setnum(newNumber)
    console.log(newNumber)
  }

  const username1  = () => {
    setuser(prev => ({...prev,age:87}))
  
  }
  return (
    <div>
      <h1>{value.age},
          {value.name}
      </h1>
      <button onClick={btnclicked}>punch me.!</button>

      <h2>{num}</h2>
      <button onClick={number} > spam me.!</button>

      <h3>{user.age}</h3>
      
      <button onClick={username1}>ohhh uhee..</button>

    </div>
  )
}

export default App
