import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {

  const [userdata , setuserdata] = useState([]);
  const [index , setindex] = useState(1)

  const getData = async () => {

   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`) 
   setuserdata(response.data);
  };

  useEffect(function () {
    getData()
  },[index])

   let printuserdata = <h3 className='bg-amber-100 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold' >Loading....
   </h3>
   if (userdata.length > 0) {
    printuserdata = userdata.map((elem,idx) => {
    

      return(
        <div key={idx} className='mb-4'>
        {/* <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden rounded-xl p-0'>
        <img className='h-full w-full object-cover ' src={elem.download_url} alt=''/>
      </div>
      <h2 className='font-bold text-lg'>
        {elem.author}
      </h2>
      </a> */}

      <Card elem={elem}/>
      </div>
    );
   });
  }

  return (

    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed bg-red-50 text-6xl'>{index}</h1>
      
      
      {/* <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get data</button> */}
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printuserdata}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        
        <button 
        disabled={index === 1}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2'
        onClick={() => {
          if(index>1){
            setindex(index-1)
            setuserdata([])
          }
        }}
        >
          previous
          </button>
          <h4>page {index}</h4>

        <button 
        className='bg-blue-800 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2'
        onClick={() => {
          setindex(index+1)

        }}
        >
          Next
          </button>
      </div>
    </div>
  );

};

export default App
