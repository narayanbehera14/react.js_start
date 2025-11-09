import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
     <img src = {props.img} alt={props.user}/>
        <h1>{props.user},{props.age}</h1>
        <h1>hello sir</h1>
        <p>Amity University Mumbai, Panvel</p>
        <button>Click me</button>
        </div>
  )
}

export default Card
