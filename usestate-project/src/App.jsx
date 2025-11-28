import React, { useState } from 'react'

const App = () => {
  const [increasesalary , decreasesalary] = useState(10)

  function Salaryincrease () {
    decreasesalary(increasesalary+1000)

  }
  function salarydecrease () {
    decreasesalary(increasesalary-1000)
  }
  return (
    <div>
      <h1>Narayan salary</h1>

      <h2>{increasesalary}</h2>

      <button onClick={Salaryincrease}>Increase</button>

      <button onClick={salarydecrease}>Decrease</button>
      
    </div>
  )
}

export default App
