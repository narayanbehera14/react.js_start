import React from 'react'
import RightContext from './RightContext'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-3 flex items-center gap-10 h-[90hv] bg- px-18'>
        <LeftContent/>
        <RightContext/>
    </div>

  )
}

export default Page1Content
