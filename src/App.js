import { useState } from "react";

import TodoList from "./components/todo-list/todoList.component";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const addText = (event) => {
    // console.log("value", event.target.value);
    const newTodo = event.target.value;
    setTodoText(newTodo);
  };

  const addMonth = (event) => {
    const newMonth = event.target.value + "";
    setMonth(newMonth);
  };
  const addDay = (event) => {
    const newDay = event.target.value + "";
    setDay(newDay);
  };

  const addItem = () => {
    if (todoText === "" || month === "" || day === "") {
      alert("请输入内容");
    } else {
      const newTodoItem = {
        todoText: todoText,
        time: month + "/" + day,
        id: todoList.length + 1,
      };
      const list = [...todoList];
      list.push(newTodoItem);
      setTodoList(list);
    }
  };

  return (
    <div className="App">
      <h1 className="app-title">Todo List</h1>
      <div>
        <span>Add a todo</span>
        <input
          name="todoText"
          type="text"
          maxLength="30"
          placeholder="E.g. Feed the cat"
          onChange={addText}
        ></input>
        <input
          name="month"
          placeholder="m"
          onChange={addMonth}
          type="text"
          maxLength="2"
        ></input>
        <input
          name="day"
          placeholder="d"
          onChange={addDay}
          type="text"
          maxLength="2"
        ></input>
        <button onClick={addItem}>Add</button>
      </div>
      <TodoList items={todoList} />
    </div>
  );
};

export default App;
