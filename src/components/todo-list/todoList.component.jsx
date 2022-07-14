import TodoItem from "../todo-item/todoItem.compontent";
import "./todo-list.styles.css";

const TodoList = ({ items }) => (
  <div className="todo-list">
    {items.map((item) => {
      return <TodoItem key={item.id} item={item}></TodoItem>;
    })}
  </div>
);

export default TodoList;
