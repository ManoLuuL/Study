import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar",
      complete: false,
    },
    {
      id: "2",
      title: "Trabalhar",
      complete: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, complete: !task.complete };

      return task;
    });

    setTasks(newTask);
  };

  const handletaskAddition = (taskTitle) => {
    const Newtask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        complete: false,
      },
    ];

    setTasks(Newtask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handletaskAddition={handletaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
