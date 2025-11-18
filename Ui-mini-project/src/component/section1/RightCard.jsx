import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
      <img  className='h-full w-full object-cover'src = "https://images.unsplash.com/photo-1606825593210-28862b3d2cda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-10 flex flex-col justify-between'>
        <h2 className='bg-white  text-2xlrounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
        <p> akash rohan dheeraj naryan sarvan amity university mumbai panvel mumbai maharashtra 400099</p>
      <div>
        <button>satisfied</button>
        <button><i class="ri-arrow-right-line"></i></button>
      </div>
      </div>
    </div>
   </div>
  )
}

export default RightCard
