import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState(["one", "two"]);
  const [dataReader, setDataReader] = useState("");
  function textDataHandler(e) {
    setDataReader(e.target.value);
  }
  function addToDoHandler() {
    if (dataReader.trim()) {
      setTask([...task, dataReader]);
      setDataReader("");
    }
  }

  const arrowUp = (id) => {
    const tempValue = [...task];
    [tempValue[id - 1], tempValue[id]] = [task[id], task[id - 1]];
    setTask(tempValue);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add a todo here"
        onChange={(e) => textDataHandler(e)}
        value={dataReader}
      />
      <button onClick={addToDoHandler}>Add Task</button>
      <ul>
        {task.map((value, id) => {
          return (
            <>
              <li key={id}>
                {value}
                <button onClick={() => arrowUp(id)}>
                  <i className="fas fa-arrow-up"></i> Up
                </button>
                <button>
                  <i className="fas fa-arrow-down"></i>Down
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
