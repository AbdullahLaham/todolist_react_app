import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import {createTodoList, getAllTasks} from './store/ToDoListReducer/todoSlice';
import { useEffect } from 'react';
import NewTask from './components/NewTask';
import { Toaster } from 'react-hot-toast';


function App() {
  const {isOpen} = useSelector((state) => state?.modal);
  const {tasks, updatedTodoList, deletedTodoList, newTodoList} = useSelector((state) => state?.todo);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllTasks());
  }, [updatedTodoList, deletedTodoList, newTodoList]);

  return (
    <div className="">
      <Toaster />
      <Header />
      <Modal />
      {/* tasks container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 py-5 '>
        {tasks?.map((task) => {
          return <NewTask task={task} />
        })}
      </div>
    </div>
  );
}

export default App;
