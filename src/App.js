import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/addTodo/addTodo";
import { Container } from "./components/container/container";
import { SectionTitle } from "./components/sectionTitle/sectionTitle";
import { TodoList } from "./components/todoList/todoList";
import { todos } from "./data/data";

function App() {
  const [list, setList] = useState(todos);

  const handleBtnAdd = (id) => {
    const index = list.findIndex((item) => item.id === id);
  };

  const handleDeleteBtn = (id) => {
    const index = list.findIndex((todo) => todo.id === id);
    console.log(index);
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <Container>
      <AddTodo list={list} setList={setList}></AddTodo>
      <SectionTitle>Todos</SectionTitle>
      <TodoList
        handleDeleteBtn={handleDeleteBtn}
        list={list}
        setList={setList}
      ></TodoList>
    </Container>
  );
}

export default App;
