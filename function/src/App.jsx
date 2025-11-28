import React from 'react'

const App = () => {
  const btnClicked = () => {
    console.log("button is clicked");
     
  }

  function mouseEnter () {
    console.log("MOuse Enter");
  }

   function inputChanging(val) {
        console.log(val)
      }

   const pageScrolling = (elem)=> {
    console.log('page scrolling...!!!')

   }

  return (
    <div>
      <h1>Hello Narayan</h1>
      <input onClick={()=> {
        console.log("input got clicked"); }}
        type="text" 
        placeholder='Enter your Name' 
        />

      <button 
      onMouseEnter={mouseEnter} 
      onClick={btnClicked}>
        change  user
        </button>

         <input onChange={inputChanging} 
      type="text" 
      placeholder='type something' 
      />



      <button 
      onMouseEnter={mouseEnter} 
      onClick={btnClicked}>
        save me
        </button>
     
      <input 
      onChange={function(elem) {
        inputChanging(elem.target.value);
        // inputChanging()
      }} 
      type = "text"
      placeholder="what is your age..?"
      />

      <button onClick={() => {
        console.log("liju is ytuber");
      }}>help me.!</button>


      <div 
      onMouseMove={(elem)=> {
        console.log(elem.clientX);

      }} className="box">

      </div>
      {/* <div onWheel={pageScrolling}>   differ way to call functon */}
      
      <div onWheel={(elem)=>{
        pageScrolling(elem)
      }} >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
    
       </div>
  )
}


export default App
