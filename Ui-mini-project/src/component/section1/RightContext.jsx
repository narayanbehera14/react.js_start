import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContext = (props) => {
  console.log(props.users);

  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users?.map((elem, idx) => {
        return (
          <RightCard
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContext;
