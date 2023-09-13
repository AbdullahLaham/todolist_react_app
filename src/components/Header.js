import React from 'react'
import { useDispatch } from 'react-redux'
import {AiOutlinePlus} from 'react-icons/ai'
import { onOpen, onClose } from '../store/ModalReducer/modalSlice';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between px-10 py-5 '>
        <div className='icon '>
          <img className='w-[2rem] h-[2rem] object-cover' src='/img/todoimg.png' />
        </div>
        <div className='w-[2rem] h-[2rem] bg-neutral-400 hover:bg-neutral-500 flex items-center justify-center rounded-xl cursor-pointer' onClick={() => dispatch(onOpen())}>
          <AiOutlinePlus className='fill-neutral-100' />
        </div>
    </div>
  )
}

export default Header