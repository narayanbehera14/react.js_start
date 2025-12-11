import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
  
  <div className='Nav'>
        <h1>Routing Example</h1>
      <h2>This is Navbar</h2>
      {/* <a href='/'>Home</a>
      <a href='/About'>About me</a>
      <a href='/Contact'>Contact</a> */}

      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Product'>Product</Link>

    </div>
  )
}

export default Navbar
