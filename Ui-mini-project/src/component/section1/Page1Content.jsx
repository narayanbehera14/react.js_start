import React from 'react'
import RightContext from './RightContext'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90hv] bg- px-18'>
        <LeftContent/>
        <RightContext user={props.users}/>
    </div>

  )
}

export default Page1Content
