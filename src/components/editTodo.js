import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editHandler } from "../redux/action";
import Modal from "react-modal";

export default function EditTodo({ task }) {
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
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };
  const [text, setText] = useState(task.text);
  const [time, setTime] = useState(task.time);

  const dispatch = useDispatch();
  const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(editHandler(task.id, text,time));
    console.log(task.id);
    toggle();
  };

  return (
    <div>
      <FaEdit style={{color:'blue'}}  onClick={toggle} /> 
      <Modal isOpen={show} style={customStyles}>
      <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input
          type='text'
          placeholder='Add Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={submissionHandler} className='btn btn-block'>Submit</button>
      <button onClick={toggle} className='btn btn-block'>reset</button>
    </form>
    </Modal>
    </div>

  );
}
