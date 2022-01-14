import React from "react";
import "./task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";



const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

  const navagation = useNavigate();

  const handleTaskDetailsClick = () => {
    navagation(`/${task.title}`)
  }


  return (
    <div
      className="containertesk"
      style={task.complete ? { borderLeft: "10px solid chartreuse" } : {}}
    >
      <div className="tasktitle" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="infotask" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>

        <button
          className="removetask"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
