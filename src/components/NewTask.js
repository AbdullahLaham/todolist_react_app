import React, { useEffect, useState } from 'react'
import {BsSquare, BsTrash, BsFillCheckCircleFill} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {deleteTodoList, onDelete, onFinished, updateTodoList} from '../store/ToDoListReducer/todoSlice'
const NewTask = ({task}) => {
  const dispatch = useDispatch();
  return (
    <div className={`p-5 bg-neutral-100 lg:m-5 md:m-2 rounded-lg border-2 border-green-20`}>
      <div className='flex items-center justify-between'>
        <div className={`${task?.isDone? 'line-through' : ''} transition-all font-semibold text-blue-500`}>
            {task.title}
        </div>
        <div className='flex items-center gap-5'>
          <BsTrash onClick={() => dispatch(deleteTodoList(task?._id))} className='cursor-pointer fill-red-500 ' />
          {task?.isDone ? <BsFillCheckCircleFill  onClick={() => dispatch(updateTodoList(task?._id))} className='cursor-pointer fill-green-500 ' /> : <BsSquare onClick={() => dispatch(updateTodoList(task?._id))} className='cursor-pointer hover:fill-neutral-500 ' />}
        </div>
        
      </div>
      <div className='w-full mt-5 flex justify-end items-center gap-5'>
        <div className='font-light '>
          {task.date?.substring(0,10)}

        </div>
        <div className='font-light '>
          {task.date?.substring(11, 16)}
        </div>
      </div>
        
    </div>
  )
}

export default NewTask