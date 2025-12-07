import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setdata] = useState([])
  const [use,setuse] = useState([])

   const getData = async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const data = await response.json()
    console.log(data)
   
    }
   const giveData = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
     // console.log('Nachoooo')
     setdata(response.data);
    }

    const pic = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')
      setuse(response.data);
    }

  
  return ( 
    <div>
      
      <button onClick={giveData}>Give Data</button>

      {data.map((elem,idx) => {
        return <h3 key={idx}>hello {elem.name}</h3>
      } )}
      <button onClick={getData}>Get Data</button>
      <button onClick={pic}>Picture</button>
      
    <div>
      {use.map(function (elem,idx) {
        return<h3 key={idx}>hello, {elem.author}{idx}</h3>
      })}
    </div>
    </div>
  )
}

export default App
