
import React, { useState } from "react";
import { FaPlus} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addHandler} from "../redux/action";
import Modal from "react-modal";
import FilterTodo from './FilterTodo';

export default function AddTodo({task}) {
  const [newText, setNewText] = useState("");
  const [newTime, setNewTime] = useState("");


 

  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      backgroundColor: "white",
      border: "solid 5px blue",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "350px",
      height: "400px",
    },
  };
  const dispatch = useDispatch();

  const addtodos = () => {
    dispatch(
      addHandler({
        id: Math.random(),
        text: newText,
        time: newTime,
        done: false,
      })
    );
    setNewText("");
    setNewTime("");
  };


  return (
      <div >
      <div className="Head">
        <h1>Todo App !!</h1>
        <FilterTodo/>
        <FaPlus style={{color:'blue'}}  onClick={addtodos} /> 
      </div>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input
          type='text'
          placeholder='Add Time'
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
      </div>
    </div>
  );
}

