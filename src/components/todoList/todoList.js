import { TodoItem } from "../todoItem/todoItem";
import "./todoList.css";

export const TodoList = ({ list, setList, handleDeleteBtn }) => {
  return (
    <div className="todoList">
      {list.map((todo) => (
        <li style={{ listStyle: "none" }}>
          <TodoItem
            key={todo.id}
            handleDeleteBtn={() => handleDeleteBtn(todo.id)}
            todo={todo}
            list={list}
            setList={setList}
          />
        </li>
      ))}
    </div>
  );
};
