import React from 'react'
import {BsSquare, BsTrash, BsFillCheckCircleFill} from 'react-icons/bs';

const NewTask = ({task}) => {
  return (
    <div className='p-5 bg-neutral-200 lg:mx-5 md:mx-2'>
      <div className='flex items-center justify-between'>
        <div>
            {task.title}
        </div>
        <div className='flex items-center gap-5'>
          <BsTrash />
          {task?.isDone ? <BsFillCheckCircleFill className='cursor-pointer fill-green-500 ' /> : <BsSquare className='cursor-pointer hover:fill-neutral-500 ' />}
        </div>
        
      </div>
      
        
    </div>
  )
}

export default NewTask