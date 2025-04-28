import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTask, DeleteTask, DelOne, UpdateTask, Completed } from "./Todostore"
import { IoMdAdd } from "react-icons/io";
import { FaTrash,FaEdit, FaCheck } from "react-icons/fa";

export const Todoredux = () => {
    const username = useSelector((state) => state.users.value) 
    const dispatch = useDispatch()

    const [task,setTask] = useState('')  
    const [updateTask, setUpdateTask] = useState('')  
    
    return (
        <div>
            <div className="flex justify-center">
                <input onChange={(e) => setTask(e.target.value)} />
                <button onClick={() => dispatch(AddTask(task))} className='border border-black py-1 px-3'><IoMdAdd /></button>
                <button onClick={() => dispatch(DeleteTask())} className='border border-black py-1 px-3'><FaTrash /></button>
            </div>
            <br /> 
            <div>
                {username.map((ele,index) => {
                    return (
                        <div key={index} className={`flex flex-col justify-center gap-4 w-96 p-2 m-2 border border-black rounded-lg ${ele.complete && 'bg-red-500'}`}>
                            <div className="flex justify-center font-semibold text-xl">
                              <h1>{ele.task}</h1>
                            </div>
                            <div className="flex justify-center">
                               <input onChange={(e) => setUpdateTask(e.target.value)}/>
                               <button onClick={() => dispatch(UpdateTask({index, newTask: updateTask}))} className='border border-black py-1 px-3'><FaEdit /></button>
                               <button onClick={() => dispatch(DelOne(index))} className='border border-black py-1 px-3'><FaTrash /></button>
                               <button onClick={() => dispatch(Completed(index))} className='border border-black py-1 px-3'><FaCheck /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}