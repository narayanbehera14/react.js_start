import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

    const Navigate = useNavigate()
    
  return (
    <div className='py-3 px-5 bg-cyan-600'>
         <button 
      onClick={() => {
        Navigate('/')
      }}
      className='font-medium bg-amber-300 px-5 py-2 cursor-pointer active:scale-95'>
        Return to Home Page
        </button>

      <button 
      onClick={() => {
        Navigate(-1)
      }}
      className='bg-red-200 py-2 px-5 rounded m-2 cursor-pointer active:scale-95 '>
        Return to Home Page
        </button>
      
    </div>
  )
}

export default Nav2
