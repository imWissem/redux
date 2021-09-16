import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler, doneHandler } from "../redux/action";
import {FaTimes,FaCheck} from 'react-icons/fa'
import EditTodo from "./editTodo";



export default function Todo({task}) {

const dispatch=useDispatch()

  return (
    <div className={`task ${task.done && 'reminder'}`} onDoubleClick={()=>dispatch(doneHandler(task.id)) }>
    <h3>{task.text} 
    <h3>
    <EditTodo task={task}/>
    <FaTimes style={{color:'red'}} onClick={()=>dispatch(deleteHandler(task.id)) } /> 
    <FaCheck 
    className={`${task.done && 'fagr'}`}
    onClick={()=>dispatch(doneHandler(task.id)) }
    />
    
    </h3> </h3>

    <p>{task.time}</p>
</div>
    
  );
}


