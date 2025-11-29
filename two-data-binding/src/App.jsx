import React, { useState } from 'react'

const App = () => {

  const [text,settext] = useState('')

  const submittedform =  (e) =>  {
    e.preventDefault()
    console.log("form is submitted by",text);
  
    const data  = {
      name : e.target.Name.value
      
    }
    console.log("user Name :", data.name)
    settext('')
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submittedform(e)
      }}>
        <label>Name : 
        <input 
        type='text'
        name='Name'
        placeholder='enter your name'
        value={text}
        onChange={(e)=>{ settext(e.target.value)

        }}/>
      </label>
      <button type='submit'>Punch me.</button>
      
      </form>
    </div>
  )

}

export default App
