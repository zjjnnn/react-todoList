import "./todo-item.styles.css";
const TodoItem = ({ item }) => {
  const { todoText, time } = item;
  return (
    <div className="todo-item">
      <div className="item-content">
        <p>{todoText}</p>
        <span>{time}</span>
      </div>
      <div className="todo-button">
        <button>toggle</button>
        <button>remove</button>
      </div>
    </div>
  );
};

export default TodoItem;
