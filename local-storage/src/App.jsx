import React from 'react'

const App = () => {

   // localStorage.clear()
   // sessionStorage.clear()
   // localStorage.setItem('user','Narayan')

  // const user =  JSON.parse(localStorage.getItem('user'))
  //  localStorage.setItem('age1','420')
  // const age1 = localStorage.getItem('age1')

  // console.log(age1);
  // const age=  localStorage.getItem('age')


  // console.log(user,age,age1);


const user1 = {
  username:'Liju',
  age:18,
  city:"Mumbai"
}

localStorage.setItem('user', JSON.stringify(user1))
const usera = JSON.parse(localStorage.getItem('user'))

console.log(usera)


  return (
    <div>
      Narayan is learning React.
      
    </div>
  )
}

export default App
