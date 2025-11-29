import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()

    console.log("Form Submitted");
    const data = {
      name: e.target.name.value,
      password: e.target.password.value,
    }

    if (e.target.password.value === e.target.Conferm_Password.value){
      console.log(data)
    } else {
      alert("Password is worng")
    }


  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <label>Name: </label>
        <input type='text' name='name' placeholder='Enter Your Name:' /><br />

        <label>
          Password: <input type="password" name="password" placeholder='Enter your password' />
        </label><br />
        <label>
          Conferm Password: <input type="password" name="Conferm_Password" placeholder='Conferm password' />
        </label><br />
     
      <button >submit</button>
       </form>
    </div>
  )
}

export default App
