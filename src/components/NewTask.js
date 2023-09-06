import React from 'react'
import {BsSquare, BsTrash, BsFillCheckCircleFill} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {onDelete, onFinished} from '../featuers/ToDoListReducer/todoSlice'
const NewTask = ({task}) => {
  const dispatch = useDispatch();

  return (
    <div className='p-5 bg-neutral-200 lg:m-5 md:m-2'>
      <div className='flex items-center justify-between'>
        <div>
            {task.title}
        </div>
        <div className='flex items-center gap-5'>
          <BsTrash onClick={() => dispatch(onDelete(task?.id))} className='cursor-pointer' />
          {task?.isDone ? <BsFillCheckCircleFill  className='cursor-pointer fill-green-500 ' /> : <BsSquare onClick={() => dispatch(onFinished(task?.id))} className='cursor-pointer hover:fill-neutral-500 ' />}
        </div>
        
      </div>
      
        
    </div>
  )
}

export default NewTask