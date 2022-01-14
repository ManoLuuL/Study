import React, { useState } from "react";
import "./addtask.css";
import Button from "./Button";

const AddTask = ({handletaskAddition}) => {
  
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

const handleAddClick = () => {
  handletaskAddition(inputData);
  setInputData("");
}

  return (
    <div className="taskcontainer">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="taskinput"
        type="text"
      />
      <div className="containerbutton">
        <Button onClick={handleAddClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
