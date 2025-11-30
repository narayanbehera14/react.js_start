import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form  onSubmit={(e)=> {
        submitHandler(e)
      }} className='flex g-4 p-10 flex-col items-start flex-col gap-4 '>
        <div className='flex  w-1/2 items-start flex-col'>
        <input 
        
        type='text'
        placeholder='Enter Notes Heading'
        className='p-5  py-2 border-2  outline-none rounded'
        />

         <textarea 
        
        type='text'
        placeholder='Write Details'
        className='px-5 w-full h-32 py-2 flex items-start border-2 outline-none rounded'
        />

        <button className='bg-white text-black outline-none px-5 py-2 rounded'>Add Notes</button>
        </div>
      </form>
      <div className='flex flex-wrap p-10'>
      <div className='h-32 w-32 rounded-b-2xl bg-white'>

      </div>
      </div>
    </div>
  )
}

export default App
