import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {onClose} from '../featuers/ModalReducer/modalSlice';
import {IoMdClose} from 'react-icons/io'
import { addNewTask } from '../featuers/ToDoListReducer/todoSlice';
const Modal = () => {

  const {isOpen} = useSelector((state) => state?.modal);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [newTask, setNewTask] = useState({
    id: Math.random() * 100,
    title: '',
    isDone: false,
  });
  
  const handleSubmit = () => {
    
    if (newTask?.title ) {
      dispatch(addNewTask(newTask));
      setShowModal(false);
      setNewTask({
        id: Math.random() * 100,
        title: '',
        isDone: false,
      })
      setTimeout(()=> dispatch(onClose()), 300)
    }
  }
  const handleClose = () => {
    setShowModal(false);
    setTimeout(()=> dispatch(onClose()), 300)
  }
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className='flex items-center justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none bg-neutral-800/70 '>
      <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
        {/* content */}
        <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>
          <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none'>
             {/*header*/}
             <div className="
                flex 
                items-center 
                p-6
                w-full
                rounded-t
                justify-center
                relative
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {'Add New Task'}
                </div>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <input type='text' className='p-5 border-2 w-full text-xl ' value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} />
              </div>
              
              {/*footer*/}

              <div className='flex flex-col gap-2 p-6'>
                <div className='flex flex-row items-center gap-4 w-full '>
                  <button onClick={handleSubmit}  className='w-full text-center bg-rose-500 text-white p-4 hover:opacity-80 rounded-lg '>Submit Task</button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal