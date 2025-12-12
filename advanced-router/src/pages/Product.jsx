import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='p-6'>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold hover:text-yellow-300' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold hover:text-yellow-300' to='/product/women'>Women</Link>
        <Link className='text-xl font-semibold hover:text-yellow-300' to='/product/kids'>Kids</Link>
      </div>

      <h1 className='text-3xl font-bold text-center my-6'>Product Page</h1>

      <Outlet />
    </div>
  )
}

export default Product
