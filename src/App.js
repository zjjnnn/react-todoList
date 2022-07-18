import { useState, useRef, useEffect } from "react";
import axios from "axios";

import TodoList from "./components/todo-list/todoList.component";
import "./App.css";

const todoUrl = axios.create({
  baseURL: "http://localhost:8080/todo",
});

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const todoText = useRef("");
  const year = useRef("");
  const month = useRef("");
  const day = useRef("");

  // const id = useRef(0);

  useEffect(() => {
    async function getTodoList() {
      const response = await todoUrl.get("");
      setTodoList(response.data.data);
      console.log("response", response);
    }
    getTodoList();
  }, []);

  // useEffect(() => {
  //   id.current = id.current + 1;
  // });

  function addTask() {
    axios
      .post("http://localhost:8080/todo", {
        task: todoText.current.value,
        date:
          year.current.value +
          "-" +
          month.current.value +
          "-" +
          day.current.value,
        taskId: 0,
      })
      .then((response) => {
        setTodoList(response.data.data);
      });

    todoText.current.value = "";
    year.current.value = "";
    month.current.value = "";
    day.current.value = "";
  }

  // console.log("render");
  return (
    <div className="App">
      <h1 className="app-title">Todo List</h1>
      <div>
        <span className="add-todo">Add a todo</span>
        <input
          name="todoText"
          type="text"
          maxLength="30"
          placeholder="E.g. Feed the cat"
          ref={todoText}
        ></input>
        <input
          className="input-date"
          name="year"
          placeholder="2022"
          ref={year}
          type="text"
          maxLength="4"
        ></input>
        <input
          className="input-date"
          name="month"
          placeholder="01"
          ref={month}
          type="text"
          maxLength="2"
        ></input>
        <input
          className="input-date"
          name="day"
          placeholder="01"
          ref={day}
          type="text"
          maxLength="2"
        ></input>
        <button onClick={addTask}>Add</button>
      </div>
      <TodoList items={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
