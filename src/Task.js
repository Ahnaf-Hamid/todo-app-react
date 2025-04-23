import { FaTrash,FaCheck } from "react-icons/fa";

export const Task = (props) => {
  return (
    <div>
      <div key={props.index} className={`flex justify-center w-72 p-2 m-2 border border-black rounded-lg ${props.elem.complete && 'bg-red-500'}`}>
          <h1>{props.elem.taskName}</h1>
          <button onClick={() => props.delOne(props.index)} className='border border-black py-1 px-3'><FaTrash /></button>
          <button onClick={() => props.isCompleted(props.index)} className='border border-black py-1 px-3'><FaCheck /></button>
      </div>
    </div>
  ) 
}