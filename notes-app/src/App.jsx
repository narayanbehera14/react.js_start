import React, { useState } from 'react'
// import './App.css'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  // const [deleteElement, setDeleteElement] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  console.log("task of arr: ", task)

  const deleteEle = (index) => {
  const deletedItem = task[index];

  alert(`Deleted data => ${JSON.stringify(deletedItem)}`);
  console.log(`Deleted data => ${JSON.stringify(deletedItem)}`)

    const updated = task.filter((_, i) => i !== index)
    setTask(updated)
  }

  return (
    <div className='min-h-screen lg:flex bg-[#0b1220] text-white'>
      
      {/* LEFT SIDE - ADD NOTES */}
      <form 
        onSubmit={submitHandler} 
        className='flex gap-6 lg:w-1/2 p-10 flex-col items-start w-full'
      >
        <h1 className='text-4xl font-bold mb-4'>Add Notes</h1>

        <input
          type='text'
          placeholder='Enter Notes Heading'
          className='p-5 py-3 border border-gray-400 w-full outline-none rounded bg-[#10182b] text-white'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder='Write Details'
          className='p-5 w-full h-40 border border-gray-400 outline-none rounded bg-[#10182b] text-white'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-yellow-500 hover:bg-yellow-600 font-semibold w-full text-black py-3 rounded'>
          Add Notes
        </button>
      </form>

      {/* RIGHT SIDE – RECENT NOTES */}
      <div className='lg:w-1/2 lg:border-l-2 border-gray-600 p-10 w-full'>
        <h1 className='text-4xl font-bold mb-6'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-8 mt-4 h-full overflow-auto'>

          {task.map((elem, idx) => (
            <div
              key={idx}
              className='h-60 w-48 rounded-xl shadow-xl p-4 flex flex-col bg-[#f8f4e3]'
            >
              <h3 className='text-xl font-bold text-black leading-tight'>
                {elem.title}
              </h3>

              <p className='mt-3 text-gray-900 font-medium leading-tight'>
                {elem.details}
              </p>

              <button className='text-black bg-amber-400 mt-27 ' onClick={() => deleteEle(idx)}>Delete</button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
