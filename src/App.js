import './App.css';
import { IoMdAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useState } from 'react';
import { Task } from './Task';
import { Todoredux } from './Todoredux';
import { Provider } from 'react-redux';
import { store } from './Todostore';

function App() {
  // const [task,setTask] = useState('')
  // const [todo,setTodo] = useState([])

  // const addTask = () => {
  //   setTodo([ ...todo,{ taskName:task, complete:false }])
  // }

  // const deleteTask = () => {
  //   setTodo([])
  // }

  // const delOne = (indexof) => {
  //   setTodo(todo.filter((ele,index) => index !== indexof))
  // }

  // const isCompleted = (indexof) => {
  //   alert('Task Completed!')

  //   setTodo(todo.map((task,index) => {
  //     if(index === indexof){
  //       return { ...task, complete: true}
  //     } else {
  //       return task
  //     }
  //   }))
  // }
  return (
    <div className='flex flex-col items-center relative top-16'>
    {/* //   <div>
    //     <input className='outline' onChange={(e) => setTask(e.target.value)}/>
    //     <button onClick={addTask} className='border border-black py-1 px-3'><IoMdAdd /></button>
    //     <button onClick={deleteTask} className='border border-black py-1 px-3'><FaTrash /></button>
    //   </div>
      
    //   <br />

    //   <div className='text-xl font-semibold'>
    //     {todo && todo.map((elem,index) => <Task index={index} elem={elem} delOne={delOne} isCompleted={isCompleted} /> )}
    //   </div> */}
      
      {/* ********************** Todo App with Redux Toolkit ************************ */}
      <Provider store={store}>
        <Todoredux />
      </Provider>  


    </div>
  );
}


export default App;
