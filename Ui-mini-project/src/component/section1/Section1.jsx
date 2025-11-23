import Navbar from "../section1/Navbar";
import Page1Content from "./Page1Content";
import React from "react";

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1
 