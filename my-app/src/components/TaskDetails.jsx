import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import "./taskdetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="retorno">
        <Button onClick={() => {navigate("/")}}>Voltar</Button>
      </div>
      <div className="detalhestask">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          laborum expedita culpa ratione voluptas fugiat!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
