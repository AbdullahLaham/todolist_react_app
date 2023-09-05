import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import NewTask from './components/NewTask';
import Modal from './components/Modal';

function App() {
  const {isOpen} = useSelector((state) => state?.modal);
  const {tasks} = useSelector((state) => state?.todo);
  return (
    <div className="">
      <Header />
      <Modal />
      {/* tasks container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 py-5 '>
        {tasks?.map((task) => {
          return <NewTask task={task} />
        })}
      </div>
      
      {isOpen ? 'true' : 'false'}
    </div>
  );
}

export default App;
